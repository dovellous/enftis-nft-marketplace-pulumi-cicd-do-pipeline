/* Import Modules */
import express from "express";
import DatabaseManager from "../src/utils/DatabaseManager";
import {generateCertificates as InitializeServerCertificates} from "./utils/Cryptography";

/* Environment Variables */
require('dotenv').config();
const port    = process.env.BACKEND_SERVICE_PORT ?? 8000;
const prefix  = process.env.BACKEND_ROUTE_PREFIX ?? "/api";
const apiDocs = process.env.BACKEND_ROUTE_APIDOC ?? "/api-docs/"+(process.env.BACKEND_SWAGGER_VER ?? "v1")+"";
const swagger = process.env.BACKEND_SWAGGER_FILE ?? "./app/docs/output/swagger-"+(process.env.BACKEND_SWAGGER_VER ?? "v1")+".json";

/* Import Swagger */
const swaggerFile = require(swagger);

/* Import App Middlewares */
const cors =require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/* Initialize the App */
const app = express();
app.use(express.json());

/* MongoDB Database Connector */
const MongoDBConnection = new DatabaseManager();

/* Routes */
const Router = require("./app/router/app-router");

app.use(prefix,Router);

/* Initialize Swagger UI */
const swaggerUi = require('swagger-ui-express');

/* Serve the API Documentation UI */
app.use(apiDocs, swaggerUi.serve, swaggerUi.setup(swaggerFile));

/* Start the Server */
app.listen(port, () => {
    
    // Connect DB
    MongoDBConnection.connect();
    
    // Generate server certificate if they don't exists
    InitializeServerCertificates();

    console.log(`Listening on port ${port}`);

});
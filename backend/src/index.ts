require('dotenv').config();
import express from "express";
import "../src/utils/AppConfig";
const cors =require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
import AuthenticationRouter from "./app/modules/authentication/AuthenticationRouter";

import DatabaseManager from "../src/utils/DatabaseManager";

import {generateCertificates} from "./utils/Cryptography";

const port = process.env.BACKEND_SERVICE_PORT ?? 8000;

const prefix = process.env.BACKEND_ROUTE_PREFIX ?? "/api";

const MongoDBConnection = new DatabaseManager();

MongoDBConnection.connect();

const app = express();

//app.use(MongoDBConnection);


app.use(express.json());

app.use(prefix, AuthenticationRouter);

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../src/app/docs/swagger.json')
/* Routes */

/* Middlewares */

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

generateCertificates();

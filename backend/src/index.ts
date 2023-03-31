require('dotenv').config();
import express from "express";
import "../src/utils/AppConfig";
const cors =require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

import AuthenticationRouter from "./apps/enftis/modules/authentication/AuthenticationRouter";

import DatabaseManager from "../src/utils/DatabaseManager";

import {generateCertificates} from "../src/utils/Cryptography";

generateCertificates();

const port = process.env.BACKEND_SERVICE_PORT ?? 8000;

const prefix = process.env.BACKEND_ROUTE_PREFIX ?? "/api";

const MongoDBConnection = new DatabaseManager();

MongoDBConnection.connect();

const app = express();

app.use(express.json());

app.use(prefix, AuthenticationRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

import express from "express";
const dotenv = require('dotenv');
const cors =require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

import AuthenticationRouter from "./apps/enftis/modules/authentication/AuthenticationRouter";

const port = process.env.BACKEND_SERVICE_PORT || 8000;

const prefix = process.env.BACKEND_ROUTE_PREFIX || "/api";

const app = express();

app.use(express.json());

app.use(prefix, AuthenticationRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

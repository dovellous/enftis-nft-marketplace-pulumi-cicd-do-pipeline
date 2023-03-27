"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const AuthenticationRouter_1 = __importDefault(require("./apps/enftis/modules/authentication/AuthenticationRouter"));
const port = process.env.BACKEND_SERVICE_PORT || 8000;
const prefix = process.env.BACKEND_ROUTE_PREFIX || "/enftis/api/v1/";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(`/auth`, AuthenticationRouter_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

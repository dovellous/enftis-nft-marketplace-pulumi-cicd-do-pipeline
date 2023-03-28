"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const AuthenticationRouter_1 = __importDefault(require("./apps/enftis/modules/authentication/AuthenticationRouter"));
const DatabaseManager_1 = __importDefault(require("../src/utils/DatabaseManager"));
const port = (_a = process.env.BACKEND_SERVICE_PORT) !== null && _a !== void 0 ? _a : 8002;
const prefix = (_b = process.env.BACKEND_ROUTE_PREFIX) !== null && _b !== void 0 ? _b : "/api";
const MongoDBConnection = new DatabaseManager_1.default();
MongoDBConnection.connect();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(prefix, AuthenticationRouter_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

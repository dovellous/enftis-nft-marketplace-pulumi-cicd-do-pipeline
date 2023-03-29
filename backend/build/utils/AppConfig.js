"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const enVars = process.env;
const appConfig = {
    serverPort: enVars.BACKEND_SERVICE_PORT || 8000
};
exports.default = appConfig;

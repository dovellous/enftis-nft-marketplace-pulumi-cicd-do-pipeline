'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerHelper_1 = require("./LoggerHelper");
const mongoose = require("mongoose");
const DatabaseManager = class DatabaseManagerClass {
    /* Constructor */
    constructor() {
        this.cxnString = process.env.DATABASE_URL || "mongodb://127.0.0.1/dovellous";
        LoggerHelper_1.Logger.log('Initialising Mongoose ...' + this.cxnString);
        this.cxnOptions = {
            autoIndex: false,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        this.cxnDBInstance = mongoose.connection;
        this.cxnDBInstance.on("error", this.onConnectionError);
        this.cxnDBInstance.once("open", this.onConnectionOpen);
        this.connect();
    }
    /* Public Instance Methods */
    connect() {
        mongoose.connect(this.cxnString, this.cxnOptions).catch((err) => { });
    }
    reconnect() {
        LoggerHelper_1.Logger.warn('Connection reconnect logic not implemented manually!');
    }
    onConnectionOpen() {
        LoggerHelper_1.Logger.success('Connection opened!');
    }
    onConnectionError() {
        LoggerHelper_1.Logger.error('Connection error!');
    }
};
exports.default = DatabaseManager;

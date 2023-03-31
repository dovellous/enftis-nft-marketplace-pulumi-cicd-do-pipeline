'use strict';
import {Logger} from "./LoggerHelper";
const mongoose = require("mongoose");
const DatabaseManager = class DatabaseManagerClass {
    /* Private Instance Fields */

    cxnString:string;

    cxnOptions:any;
    
    cxnDBInstance:any;

    /* Constructor */

    constructor() {

        this.cxnString = process.env.DATABASE_URL || "mongodb://127.0.0.1/dovellous";

        Logger.log('Initialising Mongoose ...' + this.cxnString);

        this.cxnOptions = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
    
        this.cxnDBInstance = mongoose.connection;
    
        this.cxnDBInstance.on("error", this.onConnectionError);
    
        this.cxnDBInstance.once("open", this.onConnectionOpen);

        this.connect();
        
    }

    /* Public Instance Methods */

    connect(){

        return mongoose.connect(this.cxnString, this.cxnOptions);

    }

    onConnectionOpen(){

        Logger.success('Connection opened!');
        
    }
    
    onConnectionError(){

        Logger.error('Connection error!')
    
    }
    
}

export default DatabaseManager;

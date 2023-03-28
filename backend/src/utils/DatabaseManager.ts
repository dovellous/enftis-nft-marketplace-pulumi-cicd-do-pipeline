'use strict';

const mongoose = require("mongoose");

const DatabaseManager = class LoggerHelper {
    /* Private Instance Fields */

    logger;

    cxnString:string;

    cxnOptions:any;
    
    cxnDBInstance:any;

    /* Constructor */

    constructor() {
        
        this.logger = new LoggerHelper();
        
        this.cxnString = '';
        
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
        
        mongoose.connect(this.cxnString, this.cxnOptions).catch((err: any)=>{

            console.log('Connection Error: ', err);

            this.reconnect();

        });
        
    }
    
    reconnect(){
    
    }
    
    onConnectionOpen(){
    
        this.logger.logOutput('Connection opened')
        
    }
    
    onConnectionError(){
    
    }
    
    reconnect(){
    
    }
    
    reconnect(){
    
    }
    
}

module.exports = DatabaseManager;

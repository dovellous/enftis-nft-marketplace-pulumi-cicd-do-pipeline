// Type definitions for Database 1.0
// Project: https://github.com/dovellous/node-server-express-mongo-jwt
// Definitions by: Douglas Maposa <https://github.com/drmaposa>,
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class MongooseDBClass {
    
    connectionString: string;

    constructor(message: string, connectionString: string);

}

export interface MongooseDBOptions {
    useNewUrlParser?: boolean | undefined;
    useUnifiedTopology?: boolean | undefined;
}

export type MongooseDBFunction = (
    error: Error | null,
    encoded: string | undefined,
) => void;
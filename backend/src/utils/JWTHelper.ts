import {JwtPayload, VerifyErrors} from "jsonwebtoken";

require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_TOKEN, JWT_TOKEN_EXPIRATION } = process.env;

const parseBearerToken = (bearer: string) => {
    const [_, token] = bearer.trim().split(" ");
    return token;
};

const verifyBearerToken = (authorizationHeader:string) => {
    
    if (!authorizationHeader) {
        return { status: 400, message: "No token provided!" };
    }
    
    const token = parseBearerToken( authorizationHeader );

    jwt.verify(token, JWT_TOKEN, (error:VerifyErrors, decoded:JwtPayload) => {

        if (error) {
            return { status: 400, message: "User is unauthorized to perform the function." };
        }
    
        return { status: 200, data: decoded };

    });

}

const signBearerToken = (payload:any, time:number) => {
    
    return jwt.sign(payload, JWT_TOKEN, {
        expiresIn: time || JWT_TOKEN_EXPIRATION
    });

}

export {verifyBearerToken, signBearerToken, parseBearerToken}

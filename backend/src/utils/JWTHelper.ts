require('dotenv').config();

import {JwtPayload, VerifyErrors} from "jsonwebtoken";

const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_TOKEN_EXPIRATION } = process.env;

const parseBearerToken = (bearer: string) => {
    const [_, token] = bearer.trim().split(" ");
    return token;
};

const verifyBearerToken = (accessToken:string, callBackFunction:any) => {
    
    if (!accessToken) {
        return { status: 400, message: "No token provided!" };
    }
    
    jwt.verify(accessToken, JWT_SECRET, (error:VerifyErrors, decoded:JwtPayload) => {

        if (error) {
            return { status: 400, message: "User is unauthorized to perform the function." };
        }

        callBackFunction( decoded );

    });

}

const signBearerToken = (payload:any, time:number) => {

    return jwt.sign({
            username: payload.username,
            userId: payload.userId,
            roles: payload.roles,
        },
        JWT_SECRET,
        {
            expiresIn: time || JWT_TOKEN_EXPIRATION
        });

}

export {verifyBearerToken, signBearerToken, parseBearerToken}

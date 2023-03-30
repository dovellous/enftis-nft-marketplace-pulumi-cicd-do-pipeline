require('dotenv').config();

import {JwtPayload, VerifyErrors} from "jsonwebtoken";

const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_TOKEN_EXPIRATION } = process.env;

const parseAuthorizationToken = (bearer: string) => {
    const [_, token] = bearer.trim().split(" ");
    return token;
};

const verifyBearerToken = (authorizationHeader:string, callBackFunction:any) => {
    
    const accessToken = parseAuthorizationToken(authorizationHeader);
    
    if (!accessToken) {
        
        callBackFunction(false);
        
    }
    
    try {
    
        jwt.verify(accessToken, JWT_SECRET, (error: VerifyErrors, decoded: any) => {
    
            if (error || decoded === null) {
    
                callBackFunction(false);
                
            }else{
    
                callBackFunction(decoded);
    
            }
        
        });
    
    } catch (error: any) {
    
        callBackFunction(false);
    
    }

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

export {verifyBearerToken, signBearerToken, parseAuthorizationToken}

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

                console.log(decoded);
    
                callBackFunction(decoded);
    
            }
        
        });
    
    } catch (error: any) {
    
        callBackFunction(false);
    
    }

}

interface IJsonWebAccessToken {
    id: String;
    username: String;
    email: String;
    userId: String;
    userStatus: String;
    clientId: String;
    roles: String | Array<String> | undefined;
}

const signBearerToken = (req: any, payload:any, time:number) => {

    const accessTokenPayload:IJsonWebAccessToken = {
        id: payload._id,
        username: payload.username,
        email: payload.email,
        userId: payload.userId,
        userStatus: payload.userStatus,
        clientId: req.clientId,
        roles: payload.roles,
    };

    return jwt.sign(
        accessTokenPayload,
        JWT_SECRET,
        {
            expiresIn: time || JWT_TOKEN_EXPIRATION
        });

}

export {verifyBearerToken, signBearerToken, parseAuthorizationToken}

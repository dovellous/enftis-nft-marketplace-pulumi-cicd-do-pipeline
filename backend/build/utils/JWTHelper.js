"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAuthorizationToken = exports.signBearerToken = exports.verifyBearerToken = void 0;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_TOKEN_EXPIRATION } = process.env;
const parseAuthorizationToken = (bearer) => {
    const [_, token] = bearer.trim().split(" ");
    return token;
};
exports.parseAuthorizationToken = parseAuthorizationToken;
const verifyBearerToken = (authorizationHeader, callBackFunction) => {
    const accessToken = parseAuthorizationToken(authorizationHeader);
    if (!accessToken) {
        callBackFunction(false);
    }
    try {
        jwt.verify(accessToken, JWT_SECRET, (error, decoded) => {
            if (error || decoded === null) {
                callBackFunction(false);
            }
            else {
                callBackFunction(decoded);
            }
        });
    }
    catch (error) {
        callBackFunction(false);
    }
};
exports.verifyBearerToken = verifyBearerToken;
const signBearerToken = (payload, time) => {
    return jwt.sign({
        username: payload.username,
        userId: payload.userId,
        roles: payload.roles,
    }, JWT_SECRET, {
        expiresIn: time || JWT_TOKEN_EXPIRATION
    });
};
exports.signBearerToken = signBearerToken;

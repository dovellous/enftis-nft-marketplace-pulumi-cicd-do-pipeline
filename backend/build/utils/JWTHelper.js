"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBearerToken = exports.signBearerToken = exports.verifyBearerToken = void 0;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_TOKEN_EXPIRATION } = process.env;
const parseBearerToken = (bearer) => {
    const [_, token] = bearer.trim().split(" ");
    return token;
};
exports.parseBearerToken = parseBearerToken;
const verifyBearerToken = (accessToken, callBackFunction) => {
    if (!accessToken) {
        return { status: 400, message: "No token provided!" };
    }
    jwt.verify(accessToken, JWT_SECRET, (error, decoded) => {
        if (error) {
            return { status: 400, message: "User is unauthorized to perform the function." };
        }
        callBackFunction(decoded);
    });
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

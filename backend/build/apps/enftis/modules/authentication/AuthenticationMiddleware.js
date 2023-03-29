"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpHelper_1 = require("../../../../utils/HttpHelper");
const JWTHelper_1 = require("../../../../utils/JWTHelper");
const AuthenticationModel_1 = require("./AuthenticationModel");
require('dotenv').config();
const userRoles = require('./UserRoles');
const checkDuplicateEmailAddress = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (email) {
        const emailExists = yield AuthenticationModel_1.UserModel.findOne({ emailAddress: email }).exec();
        if (emailExists != null) {
            return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Email address already exists', { emailAddress: email });
        }
        else {
            next();
        }
    }
    else {
        return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Missing email/username', req.body);
    }
});
const checkDuplicateUsername = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    if (username) {
        const usernameExists = yield AuthenticationModel_1.UserModel.findOne({ username: username }).exec();
        if (usernameExists != null) {
            return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Username already exists', { username: username });
        }
        else {
            next();
        }
    }
    else {
        return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Missing username', req.body);
    }
});
const checkToken = (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
        return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Missing authorization header', req.headers);
    }
    const token = (0, JWTHelper_1.parseBearerToken)(authorizationHeader);
    try {
        (0, JWTHelper_1.verifyBearerToken)(token, (decoded) => {
            if (decoded) {
                req.decodedAccessToken = decoded;
                if (decoded.iat * 1000 > new Date().getTime()) {
                    return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.FORBIDDEN_ERROR, 'This should never happen, the token want us to assume it\'s yet to be created, huh?', { created: new Date(decoded.iat * 1000) });
                }
                if (decoded.exp * 1000 < new Date().getTime()) {
                    return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.FORBIDDEN_ERROR, 'Token has expired', { created: new Date(decoded.iat * 1000) });
                }
                if (!decoded.hasOwnProperty('userId')) {
                    return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.FORBIDDEN_ERROR, 'The token is missing the user identity', decoded);
                }
                if (!decoded.hasOwnProperty('username')) {
                    return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.FORBIDDEN_ERROR, 'The token is missing the username', decoded);
                }
                next();
            }
            else {
                return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.FORBIDDEN_ERROR, 'Invalid token', { token });
            }
        });
    }
    catch (error) {
        return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.FORBIDDEN_ERROR, 'Could not parse token', error);
    }
};
const checkParameters = (req, res, next) => {
    const { emailAddress, username, password } = req.body;
    const userId = emailAddress || username;
    if (userId && password) {
        next();
    }
    else {
        return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Missing input parameters', {
            emailAddress,
            username,
            password,
            userId
        });
    }
};
module.exports = {
    checkDuplicateUsername,
    checkDuplicateEmailAddress,
    checkToken,
    checkParameters,
    userRoles
};

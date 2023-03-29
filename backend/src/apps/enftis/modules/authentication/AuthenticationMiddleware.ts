import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import {handleError, errors} from "../../../../utils/HttpHelper"
import {verifyBearerToken, signBearerToken, parseBearerToken} from "../../../../utils/JWTHelper";
import {UserModel} from "./AuthenticationModel";

require('dotenv').config();
const userRoles = require('./UserRoles');

const checkDuplicateEmailAddress = async (req: Request, res: Response, next: any) => {

    const {email} = req.body;

    if (email) {

        const emailExists = await UserModel.findOne({emailAddress: email}).exec();

        if (emailExists != null) {

            return handleError(res, errors.BAD_REQUEST, 'Email address already exists', {emailAddress: email});

        } else {

            next();

        }

    } else {

        return handleError(res, errors.BAD_REQUEST, 'Missing email/username', req.body);

    }

};

const checkDuplicateUsername = async (req: Request, res: Response, next: any) => {

    const {username} = req.body;

    if (username) {

        const usernameExists = await UserModel.findOne({username: username}).exec();

        if (usernameExists != null) {

            return handleError(res, errors.BAD_REQUEST, 'Username already exists', {username: username});

        } else {

            next();

        }

    } else {

        return handleError(res, errors.BAD_REQUEST, 'Missing username', req.body);

    }

};

const checkToken = (req: any, res: any, next: any) => {

    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {

        return handleError(res, errors.BAD_REQUEST, 'Missing authorization header', req.headers);

    }

    const token = parseBearerToken(authorizationHeader);

    try {

        verifyBearerToken(token, (decoded:any) => {

            if (decoded) {

                req.decodedAccessToken = decoded;

                if( decoded.iat*1000 > new Date().getTime() ){

                    return handleError(res, errors.FORBIDDEN_ERROR, 'This should never happen, the token want us to assume it\'s yet to be created, huh?', {created: new Date(decoded.iat*1000)});

                }

                if( decoded.exp*1000 < new Date().getTime() ){

                    return handleError(res, errors.FORBIDDEN_ERROR, 'Token has expired', {created: new Date(decoded.iat*1000)});

                }

                if( !decoded.hasOwnProperty('userId') ){

                    return handleError(res, errors.FORBIDDEN_ERROR, 'The token is missing the user identity', decoded);

                }

                if( !decoded.hasOwnProperty('username') ){

                    return handleError(res, errors.FORBIDDEN_ERROR, 'The token is missing the username', decoded);

                }

                next();

            } else {

                return handleError(res, errors.FORBIDDEN_ERROR, 'Invalid token', {token});

            }

        });

    } catch (error: any) {

        return handleError(res, errors.FORBIDDEN_ERROR, 'Could not parse token', error);

    }

};

const checkParameters = (req: any, res: any, next: any) => {

    const {emailAddress, username, password} = req.body;

    const userId = emailAddress || username;

    if (userId && password) {

        next();

    } else {

        return handleError(res, errors.BAD_REQUEST, 'Missing input parameters', {
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

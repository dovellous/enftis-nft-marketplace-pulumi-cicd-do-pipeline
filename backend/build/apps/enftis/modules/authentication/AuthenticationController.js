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
const Cryptography_1 = require("../../../../utils/Cryptography");
const JWTHelper_1 = require("../../../../utils/JWTHelper");
const AuthenticationModel_1 = require("./AuthenticationModel");
const bcrypt = require("bcryptjs");
const clientRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Our device registration logic starts here
    try {
        // Get device input
        const { device_name, device_uid, device_pub_key, device_agent } = req.body;
        if (device_name && device_uid && device_agent) {
            const clientId = (0, Cryptography_1.md5)(`${device_uid}:${device_name}:${device_agent}:${device_pub_key}`);
            const clientSecret = (0, Cryptography_1.sha256)(`${clientId}:${device_pub_key}`);
            //Encrypt client password
            const encryptedClientSecret = yield bcrypt.hash(clientSecret, 10);
            const clientData = {
                clientDeviceId: device_uid,
                clientDeviceName: device_name,
                clientDevicePubKey: device_pub_key,
                clientDeviceUserAgent: device_agent,
                clientId: clientId,
                clientSecret: encryptedClientSecret,
            };
            console.log(clientData, clientSecret);
            // Create client in our database
            const client = yield AuthenticationModel_1.ClientModel.create(clientData);
            client.clientSecret = clientSecret;
            // client
            (0, HttpHelper_1.handleResponse)(req, res, next, client, 201);
        }
        else {
            (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, "Missing . or invalid registration parameters", {});
        }
    }
    catch (error) {
        (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.INTERNAL_SERVER_ERROR, "Unknown registration error", error);
    }
});
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Our login logic starts here
    try {
        console.log(req.headers);
        // Get user input
        const { username, email, password, first_name, last_name } = req.body;
        if (username && email && password) {
            //Encrypt user password
            const encryptedPassword = yield bcrypt.hash(password, 10);
            const userData = {
                username: username,
                firstName: first_name,
                lastName: last_name,
                emailAddress: email.toLowerCase(),
                password: encryptedPassword,
            };
            // Create user in our database
            const user = yield AuthenticationModel_1.UserModel.create(userData);
            // Create token
            const accessToken = (0, JWTHelper_1.signBearerToken)(user, 4 * 60 * 60);
            // user
            (0, HttpHelper_1.handleResponse)(req, res, next, { user, accessToken }, 201);
        }
        else {
            (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, "Missing . or invalid registration parameters", {});
        }
    }
    catch (error) {
        (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.INTERNAL_SERVER_ERROR, "Unknown registration error", error);
    }
});
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Our login logic starts here
    try {
        // Get user input
        const { username, emailAddress, password } = req.body;
        const userLogin = username ? { username } : { emailAddress };
        // Validate if user exist in our database
        const user = yield AuthenticationModel_1.UserModel.findOne(userLogin).select('+password');
        if (user && (yield bcrypt.compare(password, user.password))) {
            // Create token
            const accessToken = (0, JWTHelper_1.signBearerToken)(user, 4 * 60 * 60);
            delete user.password;
            // user
            (0, HttpHelper_1.handleResponse)(req, res, next, { user, accessToken }, 200);
        }
        else {
            (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.UNAUTHORIZED_ERROR, "Invalid username/password combination", {});
        }
    }
    catch (err) {
        (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.INTERNAL_SERVER_ERROR, "Unknown authentication error", err);
    }
});
const profileMe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { decodedAccessToken } = req;
        const user = yield AuthenticationModel_1.UserModel.findOne({ userId: decodedAccessToken.userId }).select('+password');
        if (user) {
            delete user.password;
            // user
            (0, HttpHelper_1.handleResponse)(req, res, next, user, 200);
        }
    }
    catch (error) {
        (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", error);
    }
});
const profileSave = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { decodedAccessToken } = req;
        const requestBody = req.body;
        const user = yield AuthenticationModel_1.UserModel.findOne({ userId: decodedAccessToken.userId }).select('+password');
        if (user) {
            if (requestBody.hasOwnProperty('password')) {
                requestBody.password = yield bcrypt.hash(requestBody.password, 10);
            }
            if (requestBody.hasOwnProperty('userId')) {
                delete requestBody.userId;
            }
            if (requestBody.hasOwnProperty('id')) {
                delete requestBody.id;
            }
            if (requestBody.hasOwnProperty('_id')) {
                delete requestBody._id;
            }
            console.log('userUpdated', requestBody);
            const userUpdated = yield AuthenticationModel_1.UserModel.findOneAndUpdate({ userId: decodedAccessToken.userId }, requestBody);
            console.log('userUpdated', userUpdated);
            const user = yield AuthenticationModel_1.UserModel.findOne({ userId: decodedAccessToken.userId });
            // user
            (0, HttpHelper_1.handleResponse)(req, res, next, user, 200);
        }
    }
    catch (error) {
        (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", error);
    }
});
const resetPassword = () => {
};
const verifyEmailAddress = () => {
};
module.exports = { clientRegister, signIn, signUp, profileMe, profileSave, resetPassword, verifyEmailAddress };

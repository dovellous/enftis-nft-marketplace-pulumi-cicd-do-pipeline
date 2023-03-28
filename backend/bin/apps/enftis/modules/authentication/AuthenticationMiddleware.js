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
const AuthenticationModel_1 = require("./AuthenticationModel");
const userRoles = require('./UserRoles');
const checkDuplicateUsernameOrEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userIdentifier;
    if (req.body.hasOwnProperty('username')) {
        userIdentifier = { username: { default: req.body.username.default } };
        const usernameExists = yield AuthenticationModel_1.UserModel.findOne(userIdentifier).exec();
        if (usernameExists != null) {
            return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Username already exists', userIdentifier);
        }
    }
    else if (req.body.hasOwnProperty('emailAddress')) {
        userIdentifier = { emailAddress: req.body.emailAddress };
        const emailExists = yield AuthenticationModel_1.UserModel.findOne(userIdentifier).exec();
        if (emailExists != null) {
            return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Email address already exists', userIdentifier);
        }
    }
    else {
        return (0, HttpHelper_1.handleError)(res, HttpHelper_1.errors.BAD_REQUEST, 'Missing email/username', req.body);
    }
    next();
});
const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!Object.values(userRoles).includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }
    next();
};
module.exports = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted,
    userRoles
};

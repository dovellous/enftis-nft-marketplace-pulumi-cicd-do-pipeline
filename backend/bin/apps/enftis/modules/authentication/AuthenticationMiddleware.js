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
const AuthenticationModel_1 = require("./AuthenticationModel");
const userRoles = require('./UserRoles');
const checkDuplicateUsernameOrEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userIdentifier = {
        username: null,
        email: null
    };
    if (req.body.hasOwnProperty('username')) {
        userIdentifier.username = req.body.username;
    }
    else if (req.body.hasOwnProperty('email')) {
        userIdentifier.email = req.body.username;
    }
    else {
        return res.sendStatus(400).end();
    }
    // Check Email / Username existence
    const result = yield AuthenticationModel_1.UserModel.findOne(userIdentifier).exec();
    console.log(result);
    next();
    /*
    
    (err:any, user: IUser | any) => {
        
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        
        if (user) {
            res.status(400).send({ message: 'Failed! Email / Username is already in use!' });
            return;
        }
        
        next();
        
    });
    
    */
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

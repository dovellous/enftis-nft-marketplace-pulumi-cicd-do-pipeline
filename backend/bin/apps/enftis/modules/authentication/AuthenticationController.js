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
const signIn = () => {
};
const signUp = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = new AuthenticationModel_1.UserModel({
        username: {
            default: 'drmaposa'
        },
        emailAddress: 'bill@initech.com',
        password: '@l3Tm3!N#2023'
    });
    console.log('Saving user ...');
    yield user.save();
    console.log('User saved!');
});
const resetPassword = () => {
};
const verifyEmailAddress = () => {
};
module.exports = { signIn, signUp, resetPassword, verifyEmailAddress };

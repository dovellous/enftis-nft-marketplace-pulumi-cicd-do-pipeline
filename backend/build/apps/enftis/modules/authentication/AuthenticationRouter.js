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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { resetPassword, signIn, signUp, profileMe, profileSave, verifyEmailAddress } = require("./AuthenticationController");
const { checkDuplicateUsername, checkDuplicateEmailAddress, checkParameters, checkToken } = require("./AuthenticationMiddleware");
const routerPrefix = '/auth';
router.get(`${routerPrefix}/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`Authentication API`).end();
}));
router.post(`${routerPrefix}/sign-up`, [
    checkDuplicateUsername,
    checkDuplicateEmailAddress
], signUp);
router.post(`${routerPrefix}/sign-in`, [
    checkParameters
], signIn);
router.get(`${routerPrefix}/profile/me`, [
    checkToken
], profileMe);
router.post(`${routerPrefix}/profile/me`, [
    checkToken
], profileSave);
router.get('*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendStatus(404);
}));
exports.default = router;

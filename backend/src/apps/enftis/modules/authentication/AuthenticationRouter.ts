import express, {  Request, Response } from "express";
const router = express.Router();

const {resetPassword, signIn, signUp, profileMe, verifyEmailAddress} = require("./AuthenticationController");

const {checkDuplicateUsername, checkDuplicateEmailAddress, checkParameters, checkToken}  = require("./AuthenticationMiddleware");

const routerPrefix = '/auth'

router.get(`${routerPrefix}/`, async (req:Request, res:Response) => {
    
    res.send(`Authentication API`).end();

});

router.post(
    `${routerPrefix}/sign-up`,
    [
        checkDuplicateUsername,
        checkDuplicateEmailAddress
    ],
    signUp
);

router.post(
    `${routerPrefix}/sign-in`,
    [
        checkParameters
    ],
    signIn
);

router.get(
    `${routerPrefix}/profile/me`,
    [
        checkToken
    ],
    profileMe
);

router.get('*', async (req:Request, res:Response)=>{
    
    res.sendStatus(404);
    
})

export default router;
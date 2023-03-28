import express, {  Request, Response } from "express";
const router = express.Router();

const {resetPassword, signIn, signUp, verifyEmailAddress} = require("./AuthenticationController");

const {checkDuplicateUsernameOrEmail, checkRolesExisted}  = require("./AuthenticationMiddleware");

router.get('/', async (req:Request, res:Response) => {
    
    res.send(`Authentication API`).end();

});

router.post(
    '/sign-up',
    [
        checkDuplicateUsernameOrEmail,
        checkRolesExisted
    ],
    signUp
);

router.get('*', async (req:Request, res:Response)=>{
    
    res.sendStatus(404);
    
})

export default router;
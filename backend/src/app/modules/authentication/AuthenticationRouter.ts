import express, {Request, Response} from "express";
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');

const routerPrefix = '/auth'
router.use(`${routerPrefix}/api-docs`, swaggerUi.serve);
router.get(`${routerPrefix}/api-docs`, swaggerUi.setup(swaggerDocument));

const {clientRegister, resetPassword, signIn, signUp, profileMe, profileSave, verifyEmailAddress} = require("./AuthenticationController");

const {
    checkDuplicateUsername,
    checkDuplicateEmailAddress,
    checkParameters,
    checkClient,
    checkToken
} = require("./AuthenticationMiddleware");

router.get(`${routerPrefix}/`, async (req: Request, res: Response) => {

    res.send(`Authentication API`).end();

});

router.post(
    `${routerPrefix}/client/register`,
    [],
    clientRegister
);

router.post(
    `${routerPrefix}/sign-up`,
    [
        checkClient,
        checkDuplicateUsername,
        checkDuplicateEmailAddress
    ],
    signUp
);

router.post(
    `${routerPrefix}/sign-in`,
    [
        checkClient,
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

router.post(
    `${routerPrefix}/profile/me`,
    [
        checkToken
    ],
    profileSave
);

router.get('*', async (req: Request, res: Response) => {

    res.sendStatus(404);

})

export default router;
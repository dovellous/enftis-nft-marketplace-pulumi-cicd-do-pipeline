
const express = require('express');
const router = express.Router();

const {resetPassword, signIn, signUp, verifyEmailAddress} = require("./AuthenticationController");
const {checkDuplicateUsernameOrEmail, checkRolesExisted}  = require("./AuthenticationMiddleware");

router.get('/:id/:user/:meta', async (req, res, next) => {

    

});

router.post(
    '/sign-up',
    [
        checkDuplicateUsernameOrEmail,
        checkRolesExisted
    ],
    signUp
);

module.exports = router;
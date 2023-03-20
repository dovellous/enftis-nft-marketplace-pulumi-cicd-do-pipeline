import {resetPassword, signIn, signUp, verifyEmailAddress} from "../controllers/AuthenticationController";

module.exports = function(app:any) {
    
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });
    
    app.post(
        '/sign-up',
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        signUp
    );
    
    app.post(
        '/sign-in',
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        signIn
    );
    
    app.post(
        '/reset-password',
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        resetPassword
    );
    
    app.post(
        '/verify-email-address',
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        verifyEmailAddress
    );
    
    app.post('/api/auth/signin', controller.signin);
    
};
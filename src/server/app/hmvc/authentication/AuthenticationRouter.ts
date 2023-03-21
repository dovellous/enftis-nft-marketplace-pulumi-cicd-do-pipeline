import {resetPassword, signIn, signUp, verifyEmailAddress} from "./AuthenticationController";
import {checkDuplicateUsernameOrEmail, checkRolesExisted} from "./AuthenticationMiddleware";

module.exports = function(app:any) {
    
    app.use(function(req: any, res: any, next: any) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });
    
    app.post(
        '/sign-up',
        [
            checkDuplicateUsernameOrEmail,
            checkRolesExisted
        ],
        signUp
    );
    
    app.post(
        '/sign-in',
        [
            //
        ],
        signIn
    );
    
    app.post(
        '/reset-password',
        [
            //
        ],
        resetPassword
    );
    
    app.post(
        '/verify-email-address',
        [
            //
        ],
        verifyEmailAddress
    );
    
};
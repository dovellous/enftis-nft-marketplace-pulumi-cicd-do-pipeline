import {handleResponse, handleError, errors, handleError} from "../../../../utils/HttpHelper";
import {verifyBearerToken, signBearerToken, parseBearerToken} from "../../../../utils/JWTHelper";

import {UserModel} from "./AuthenticationModel";

const bcrypt = require("bcryptjs");

const signUp = async (req:any, res:any, next: any) => {
	
	// Our login logic starts here
	try {
		
		// Get user input
		const { username, email, password, first_name, last_name } = req.body;
		
		if (username && email && password) {
			
			//Encrypt user password
			const encryptedPassword = await bcrypt.hash(password, 10);
			
			const userData = {
				username: {default: username},
				firstName: first_name,
				lastName: last_name,
				emailAddress: email.toLowerCase(), // sanitize: convert email to lowercase
				password: encryptedPassword,
			};
			
			// Create user in our database
			const user = await UserModel.create(userData);
			
			// Create token
			const token = signBearerToken(user, '4hr');
			
			// save user token
			user.token = token;
			
			console.log(user);
			
			// user
			handleResponse(req, res, next, user);
			
		} else {
			
			handleError(res, errors.BAD_REQUEST, "Missing . or invalid registration parameters", {});
			
		}
		
	} catch (err) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown registration error", err);
		
	}
	
};

const signIn = async(req:any, res:any, next: any) => {
	
	// Our login logic starts here
	try {
		// Get user input
		const { username, emailAddress, password } = req.body;
		
		const userLogin = username ? {username} : {emailAddress};
		
		// Validate if user exist in our database
		const user = await UserModel.findOne(userLogin);
		
		if (user && (await UserModel.compare(password, user.password))) {
			// Create token
			const token = signBearerToken(user, '4h');
			
			// save user token
			user.token = token;
			
			// user
			handleResponse(req, res, next, user);
			
		} else {
			
			handleError(res, errors.UNAUTHORIZED_ERROR, "Invalid username/password combinarion", {});
			
		}
		
	} catch (err) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown authentication error", err);
		
	}
	
};

const profileMe = async(req:any, res:any, next: any) => {
	
	try {
		
		const { bearerToken, bearerTokenDecoded } = req;
		
		//const user = await UserModel.findOne({ emailAddress });
		
		console.log(bearerToken, bearerTokenDecoded)
		
	} catch (err) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", {});
		
		console.log(err);
		
	}
	
};

const resetPassword = () => {

};

const verifyEmailAddress = () => {

};

module.exports = {signIn, signUp, profileMe, resetPassword, verifyEmailAddress}
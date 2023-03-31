import * as fs from "fs";
import {handleResponse, handleError, errors} from "../../../utils/HttpHelper";
import {hash, base64Encode, getServerPublicKey} from "../../../utils/Cryptography";
import {signBearerToken} from "../../../utils/JWTHelper";

import {UserModel, IClient, ClientModel, IUser} from "./AuthenticationModel";

const bcrypt = require("bcryptjs");

const clientRegister = async (req:any, res:any, next: any) => {
	
	// Our device registration logic starts here
	try {
		
		// Get device input
		const { device_name, device_uid, device_pub_key, device_agent } = req.body;
		
		if (device_name && device_uid && device_agent) {
			
			const clientId:string = hash(`${device_uid}:${device_name}:${device_agent}:${device_pub_key}`, 'md5');
			
			const clientSecret:string = hash(`${clientId}:${device_pub_key}`, 'sha256');
			
			//Encrypt client password
			const encryptedClientSecret = await bcrypt.hash(clientSecret, 10);
			
			const clientDevicePubKey:string = base64Encode(device_pub_key);
			
			const clientData:IClient = {
				clientDeviceId: device_uid,
				clientDeviceName: device_name,
				clientDevicePubKey: clientDevicePubKey,
				clientDeviceUserAgent: device_agent,
				clientId: clientId,
				clientSecret: encryptedClientSecret,
			};
			
			// Create client in our database
			// @ts-ignore
			const client:IClient = await ClientModel.create(clientData);
			
			client.clientSecret = clientSecret;
			
			client.clientDevicePubKey = '';
			
			delete client.clientDevicePubKey;
			
			const serverPubKey = getServerPublicKey();

			client.serverDevicePubKey = base64Encode(serverPubKey);

			// client
			handleResponse(req, res, next, client, 201);
			
		} else {
			
			handleError(res, errors.BAD_REQUEST, "Missing or invalid registration parameters", {});
			
		}
		
	} catch (error:any) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown registration error", error);
		
	}
	
};

const signUp = async (req:any, res:any, next: any) => {
	
	// Our login logic starts here
	try {
		
		console.log(req.headers)
		
		// Get user input
		const { username, email, password, first_name, last_name } = req.body;
		
		if (username && email && password) {
			
			//Encrypt user password
			const encryptedPassword = await bcrypt.hash(password, 10);
			
			const userData = {
				username: username,
				firstName: first_name,
				lastName: last_name,
				emailAddress: email.toLowerCase(), // sanitize: convert email to lowercase
				password: encryptedPassword,
			};
			
			// Create user in our database
			const user:IUser = await UserModel.create(userData);

			user.password = '';

			// user
			handleResponse(req, res, next, user, 201);
			
		} else {
			
			handleError(res, errors.BAD_REQUEST, "Missing . or invalid registration parameters", {});
			
		}
		
	} catch (error:any) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown registration error", error);
		
	}
	
};

const signIn = async(req:any, res:any, next: any) => {
	
	// Our login logic starts here
	try {
		// Get user input
		const { username, emailAddress, password } = req.body;
		
		const userLogin = username ? {username} : {emailAddress};
		
		// Validate if user exist in our database
		const user = await UserModel.findOne(userLogin).select('+password');

		if (user && (await bcrypt.compare(password, user.password))) {
			// Create token
			const accessToken = signBearerToken(req, user, 4 * 60 * 60);

			// user
			handleResponse(req, res, next, {accessToken}, 200);
			
		} else {
			
			handleError(res, errors.UNAUTHORIZED_ERROR, "Invalid username/password combination", {});
			
		}
		
	} catch (err) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown authentication error", err);
		
	}
	
};

const profileMe = async(req:any, res:any, next: any) => {

	try {

		const { decodedAccessToken } = req;

		const user:IUser = await UserModel.findOne({userId: decodedAccessToken.userId}).select('+password');

		if (user) {

			user.password = '';

			// user
			handleResponse(req, res, next, user, 200);

		}

	} catch (error: any) {

		handleError(res, errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", error);

	}

};

const profileSave = async(req:any, res:any, next: any) => {

	try {

		const { decodedAccessToken } = req;

		const requestBody:any = req.body;

		const user = await UserModel.findOne({userId: decodedAccessToken.userId}).select('+password');

		if (user) {

			if(requestBody.hasOwnProperty('password')){

				requestBody.password = await bcrypt.hash(requestBody.password, 10);

			}

			if(requestBody.hasOwnProperty('userId')){

				delete requestBody.userId;

			}

			if(requestBody.hasOwnProperty('id')){

				delete requestBody.id;

			}

			if(requestBody.hasOwnProperty('_id')){

				delete requestBody._id;

			}

			console.log('userUpdated', requestBody);

			const userUpdated = await UserModel.findOneAndUpdate({userId: decodedAccessToken.userId}, requestBody);

			console.log('userUpdated', userUpdated);

			const user = await UserModel.findOne({userId: decodedAccessToken.userId});

			// user
			handleResponse(req, res, next, user, 200);

		}

	} catch (error: any) {

		handleError(res, errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", error);

	}

};

const resetPassword = () => {

};

const verifyEmailAddress = () => {

};

module.exports = {clientRegister, signIn, signUp, profileMe, profileSave, resetPassword, verifyEmailAddress}
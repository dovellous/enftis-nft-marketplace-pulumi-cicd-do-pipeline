
import {handleResponse, errors} from "../../../../utils/HttpHelper";

import {UserModel} from "./AuthenticationModel";

const signIn = () => {

};

const signUp = async (req:any, res:any, next: any) => {
	
	const user = new UserModel(req.body);
	
	const userData = await user.save();
	
	//console.log('User saved!', userData);
	
	return handleResponse(res, req, next, userData);
	
};

const resetPassword = () => {

};

const verifyEmailAddress = () => {

};

module.exports = {signIn, signUp, resetPassword, verifyEmailAddress}
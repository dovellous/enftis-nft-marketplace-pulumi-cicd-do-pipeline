import {UserModel} from "./AuthenticationModel";

const signIn = () => {

};

const signUp = async () => {
	
	const user = new UserModel({
		username: {
			default: 'drmaposa'
		},
		emailAddress: 'bill@initech.com',
		password: '@l3Tm3!N#2023'
	});
	
	console.log('Saving user ...');
	
	await user.save();
	
	console.log('User saved!');
	
};

const resetPassword = () => {

};

const verifyEmailAddress = () => {

};

module.exports = {signIn, signUp, resetPassword, verifyEmailAddress}
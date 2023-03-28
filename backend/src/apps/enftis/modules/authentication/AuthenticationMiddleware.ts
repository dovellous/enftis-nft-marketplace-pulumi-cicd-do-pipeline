import {Request, Response} from "express";

import {handleError, errors} from "../../../../utils/HttpHelper"

import {UserModel} from "./AuthenticationModel";

const userRoles = require('./UserRoles');

const checkDuplicateUsernameOrEmail = async (req: Request, res:Response, next:any) => {
	
	let userIdentifier:any;
	
	if(req.body.hasOwnProperty('username')){
		
		userIdentifier = {username: {default: req.body.username.default }};
		
		const usernameExists = await UserModel.findOne(userIdentifier).exec();
		
		if(usernameExists != null){
			
			return handleError(res, errors.BAD_REQUEST, 'Username already exists', userIdentifier);
			
		}
		
	}else if(req.body.hasOwnProperty('emailAddress')){
		
		userIdentifier = {emailAddress: req.body.emailAddress};
		
		const emailExists = await UserModel.findOne(userIdentifier).exec();
		
		if(emailExists != null){
			
			return handleError(res, errors.BAD_REQUEST, 'Email address already exists', userIdentifier);
			
		}
		
	}else{
		
		return handleError(res, errors.BAD_REQUEST, 'Missing email/username', req.body);
		
	}
	
	next();
	
};

const checkRolesExisted = (req: Request, res:Response, next:any) => {
	
	if (req.body.roles) {
		
		for (let i = 0; i < req.body.roles.length; i++) {
			
			if (!Object.values(userRoles).includes(req.body.roles[i])) {
				
				res.status(400).send({
					message: `Failed! Role ${req.body.roles[i]} does not exist!`
				});
				
				return;
				
			}
			
		}
		
	}
	
	next();
	
};

module.exports = {
	checkDuplicateUsernameOrEmail,
	checkRolesExisted,
	userRoles
};

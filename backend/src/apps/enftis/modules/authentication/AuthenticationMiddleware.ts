import {Request, Response} from "express";

import {IUser, UserModel} from "./AuthenticationModel";

const userRoles = require('./UserRoles');

const checkDuplicateUsernameOrEmail = async (req: Request, res:Response, next:any) => {
	
	const userIdentifier = {
		username: null,
		email: null
	};
	
	if(req.body.hasOwnProperty('username')){
		
		userIdentifier.username = req.body.username;
		
	}else if(req.body.hasOwnProperty('email')){
		
		userIdentifier.email = req.body.username;
		
	}else{
		
		return res.sendStatus(400).end();
		
	}
	
	next();
	
	// Check Email / Username existence
	const result = await UserModel.findOne(userIdentifier).exec();
	
	console.log(result);
	
	/*
	
	(err:any, user: IUser | any) => {
		
		if (err) {
			res.status(500).send({ message: err });
			return;
		}
		
		if (user) {
			res.status(400).send({ message: 'Failed! Email / Username is already in use!' });
			return;
		}
		
		next();
		
	});
	
	*/
	
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

import AuthenticationModel from './AuthenticationModel';

const UserRoles = require('./UserRoles');

const checkDuplicateUsernameOrEmail = (req:any, res:any, next:any) => {
	
	const userIdentifier:any = {};
	
	if(req.body.hasOwnProperty('username')){
		
		userIdentifier.username = req.body.username;
		
	}else if(req.body.hasOwnProperty('email')){
		
		userIdentifier.email = req.body.username;
		
	}else{
		
		res.status(500).send({ message: 'Email / Username was not found in your request' });
		
	}
	
	// Check Email / Username existence
	AuthenticationModel.findOne(userIdentifier).exec((err:any, user:any) => {
		
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
	
};

const checkRolesExisted = (req:any, res:any, next:any) => {
	
	if (req.body.roles) {
		
		for (let i:number = 0; i < req.body.roles.length; i++) {
			
			if (!Object.values(UserRoles).includes(req.body.roles[i])) {
				
				res.status(400).send({
					message: `Failed! Role ${req.body.roles[i]} does not exist!`
				});
				
				return;
				
			}
			
		}
		
	}
	
	next();
	
};

export {
	checkDuplicateUsernameOrEmail,
	checkRolesExisted
};

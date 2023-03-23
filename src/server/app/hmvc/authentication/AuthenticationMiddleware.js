const AuthenticationModel = require('./AuthenticationModel');

const userRoles = require('./UserRoles');

const checkDuplicateUsernameOrEmail = (req, res, next) => {
	
	const userIdentifier = {};
	
	if(req.body.hasOwnProperty('username')){
		
		userIdentifier.username = req.body.username;
		
	}else if(req.body.hasOwnProperty('email')){
		
		userIdentifier.email = req.body.username;
		
	}else{
		
		res.status(500).send({ message: 'Email / Username was not found in your request' });
		
	}
	
	// Check Email / Username existence
	AuthenticationModel.findOne(userIdentifier).exec((err, user) => {
		
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

const checkRolesExisted = (req, res, next) => {
	
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

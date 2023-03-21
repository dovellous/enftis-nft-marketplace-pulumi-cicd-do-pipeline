const AuthenticationRouter:any = require("../hmvc/authentication/AuthenticationRouter");

module.exports = function(app: any) {
	
	app.use('/api/v1/auth', AuthenticationRouter);
  
};

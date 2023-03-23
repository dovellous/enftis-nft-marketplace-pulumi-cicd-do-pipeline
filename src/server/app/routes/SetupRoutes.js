

module.exports = function(app) {

	const AuthenticationRouter = require("../hmvc/authentication/AuthenticationRouter");

	app.use('/api/v1/auth', AuthenticationRouter);
  
};
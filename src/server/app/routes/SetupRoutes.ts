import acmeRouter from "./AcmeRouter";
import AuthenticationRouter from "./AuthenticationRouter";

module.exports = function(app: any) {
	
	app.use('/api/v1/auth', acmeRouter);
	
	app.use('/api/v1/auth', AuthenticationRouter);

	require('./AuthRoutes.ts')(app);
	require('./UserRoutes.ts')(app);
	require('./ResourceItemsRoutes.ts')(app);
  
};

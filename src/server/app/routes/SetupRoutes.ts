import acmeRouter from "./AcmeRouter";

module.exports = function(app: any) {

	app.use('/acmeRouter', acmeRouter);

	require('./AuthRoutes.ts')(app);
	require('./UserRoutes.ts')(app);
	require('./ResourceItemsRoutes.ts')(app);
  
};

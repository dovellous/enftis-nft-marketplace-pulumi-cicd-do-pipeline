module.exports = function(app) {
	
	require('./AuthRoutes.ts')(app);
	require('./UserRoutes.ts')(app);
	require('./ResourceItemsRoutes.ts')(app);
  
};

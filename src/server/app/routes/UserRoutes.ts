const { AuthJWT } = require('../middlewares/index.ts');
const controller = require('../controllers/UserController.ts');

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			'Access-Control-Allow-Headers',
			'x-access-token, Origin, Content-Type, Accept'
		);
		next();
	});

	app.get('/api/test/all', controller.allAccess);

	app.get('/api/test/user', [AuthJWT.verifyToken], controller.userBoard);

	app.get(
		'/api/test/mod',
		[AuthJWT.verifyToken, AuthJWT.isModerator],
		controller.moderatorBoard
	);

	app.get(
		'/api/test/admin',
		[AuthJWT.verifyToken, AuthJWT.isAdmin],
		controller.adminBoard
	);
};

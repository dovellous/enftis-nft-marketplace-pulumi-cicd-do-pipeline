
const {RoleModel} = require('../models/index.ts');

const JsonWebToken = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (!token) {
		return res.status(403).send({ message: 'No token provided!' });
	}

	JsonWebToken.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: 'Unauthorized!' });
		}
		req.userId = decoded.id;
		next();
	});

};

const createToken = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (!token) {
		return res.status(403).send({ message: 'No token provided!' });
	}

	JsonWebToken.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: 'Unauthorized!' });
		}
		req.userId = decoded.id;
		next();
	});

};

const isAdmin = (req, res, next) => {
	User.findById(req.userId).exec((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		RoleModel.find(
			{
				_id: { $in: user.roles }
			},
			(err, roles) => {
				if (err) {
					res.status(500).send({ message: err });
					return;
				}

				for (let i = 0; i < roles.length; i++) {
					if (roles[i].name === 'admin') {
						next();
						return;
					}
				}

				res.status(403).send({ message: 'Require Admin Role!' });
				return;
			}
		);
	});
};

const isModerator = (req, res, next) => {
	User.findById(req.userId).exec((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		RoleModel.find(
			{
				_id: { $in: user.roles }
			},
			(err, roles) => {
				if (err) {
					res.status(500).send({ message: err });
					return;
				}

				for (let i = 0; i < roles.length; i++) {
					if (roles[i].name === 'moderator') {
						next();
						return;
					}
				}

				res.status(403).send({ message: 'Require Moderator Role!' });
				return;
			}
		);
	});
};

const isRevoked = async (req, payload, done) => {
	if(!payload.isAdmin){
		done(null, true)
	}

	done();
}

const expressAuthJWT = () => {
	const secret = process.env.secret;
	const api = process.env.API_URL;
	return {
		path: [
			{url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
			{url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
			{url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
			`${api}/users/login`,
			`${api}/users/register`
		]
	}
}

const AuthJwt = {
	verifyToken: verifyToken,
	createToken: createToken,
	isAdmin: isAdmin,
	isModerator: isModerator,
	jsonWebToken: JsonWebToken
};

module.exports = AuthJwt;

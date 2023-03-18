const config = require('../config/AuthConfig.ts');
const db = require('../models/index.ts');
const User = db.user;
const Role = db.role;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req: { body: { username: any; email: any; password: any; roles: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any; }): void; new(): any; }; }; send: (arg0: { message: string; }) => void; }) => {
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	});

	user.save((err: any, user: { roles: any[]; save: (arg0: { (err: any): void; (err: any): void; }) => void; }) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (req.body.roles) {
			Role.find(
				{
					name: { $in: req.body.roles },
				},
				(err: any, roles: any[]) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					user.roles = roles.map((role: { _id: any; }) => role._id);

					user.save((err: any) => {
						if (err) {
							res.status(500).send({ message: err });
							return;
						}

						res.send({ message: 'User was registered successfully!' });
					});
				}
			);
		} else {
			Role.findOne({ name: 'user' }, (err: any, role: { _id: any; }) => {
				if (err) {
					res.status(500).send({ message: err });
					return;
				}

				user.roles = [role._id];
				user.save((err: any) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					res.send({ message: 'User was registered successfully!' });
				});
			});
		}
	});
};

exports.signin = (req: { body: { username: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message?: any; accessToken?: any; id?: any; username?: any; email?: any; roles?: string[]; }): void; new(): any; }; }; }) => {
	User.findOne({
		username: req.body.username,
	})
		.populate('roles', '-__v')
		.exec((err: any, user: { password: any; id: any; roles: string | any[]; _id: any; username: any; email: any; }) => {
			if (err) {
				res.status(500).send({ message: err });
				return;
			}

			if (!user) {
				return res.status(404).send({ message: 'User Not found.' });
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: 'Invalid Password!',
				});
			}

			const token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400, // 24 hours
			});

			const authorities = [];

			for (let i = 0; i < user.roles.length; i++) {
				authorities.push('ROLE_' + user.roles[i].name.toUpperCase());
			}

			res.status(200).send({
				id: user._id,
				username: user.username,
				email: user.email,
				roles: authorities,
				accessToken: token,
			});

		});
    
};

const AUTH_JWT_SECRET = process.env.AUTH_JWT_SECRET || '0x123.secret.key';

module.exports = {
	secret: AUTH_JWT_SECRET
};

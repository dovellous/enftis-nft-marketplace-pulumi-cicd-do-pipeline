const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'db_name';

module.exports = {
	HOST: DB_HOST,
	PORT: DB_PORT,
	DB: DB_NAME
};

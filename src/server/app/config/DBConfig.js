const MYSQL_HOST = process.env.DB_HOST || '127.0.0.1';
const MYSQL_PORT = process.env.DB_PORT || 27017;
const MYSQL_NAME = process.env.DB_NAME || 'dovellous';

const MONGOOSE_HOST = process.env.DB_HOST || '127.0.0.1';
const MONGOOSE_PORT = process.env.DB_PORT || 27017;
const MONGOOSE_NAME = process.env.DB_NAME || 'dovellous';

const MONGOOSE_OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const MySQLConfig = {
	HOST: MYSQL_HOST,
	PORT: MYSQL_PORT,
	DB: MYSQL_NAME
};

const MongooseConfig = {
	HOST: MONGOOSE_HOST,
	PORT: MONGOOSE_PORT,
	DB: MONGOOSE_NAME,
	OPTIONS: MONGOOSE_OPTIONS
};

module.exports = { MySQLConfig, MongooseConfig };

const  { signToken, verifyToken } = require('./JWTHelper');
const  { userHasRole } = require('./UsersHelper');
const  { store, setItem, getItem } = require('./StorageHelper');
const  { errors, handleError} = require('./ErrorHelper');
const  { startNodeJSExpressServer } = require('./ServerHelper');
const  { MongooseDBConnect } = require('./DatabaseHelper');
const  { LoggerHelper } = require('./LoggerHelper');

module.exports = {

	JsonWebToken: { signToken, verifyToken },

	userHelper: { userHasRole },

	serverHelper: { startNodeJSExpressServer },

	databaseHelper: { MongooseDBConnect },
	
	storageHelper: { store, setItem, getItem },

	errorHelper: {errors, handleError},
	
	log: {
		
		info: (param:string) => {
			
			const _logger:any = new LoggerHelper();
			_logger.logOutput(param);
			
		}
		
	},

	strings: {

	},
	arrays: {
	
	},
	objects: {
		convertToArray: (obj:any) => {
			const arr = Object.keys(obj).map((key:any) => [key, obj[key]]);
			return arr;
		}
	},
	numbers: {

		formatCurrency: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',

			// These options are needed to round to whole numbers if that's what you want.
			//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
			//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
		}),
	
	},
	utils: {
	
	},
	session: {
	
	},
	cookies: {
	
	},
	storage: {
	
	}

}
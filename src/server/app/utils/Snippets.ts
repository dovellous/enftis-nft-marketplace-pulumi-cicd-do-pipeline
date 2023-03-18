const axios = require('axios');
const qs = require('qs');

module.exports = {

	getAccessToken: () => {

		return '';
        
	},

	errorHandler: ( err, req, res, next) => {

		if (err.name === 'UnauthorizedError') {
			return res.status(401).json({ message: 'The user is not authorized' })
		}

		if (err.name === 'ValidationError') {
			return res.status(401).json({ message: err })
		}

		return res.status(500).json(err);

	},

	strings: {

	},
	arrays: {
	
	},
	objects: {
		convertToArray: (obj) => {
			//console.warn(":: OBJ ::", obj);
			const arr = Object.keys(obj).map((key) => [key, obj[key]]);
			//console.warn(":: ARR ::", arr);
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
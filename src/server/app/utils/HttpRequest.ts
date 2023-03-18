const axiosClient = require('axios');

const apiConfig = require('../config/APIConfig.ts');

const apiBaseURL = apiConfig.API_END_POINT;

const snippets = require('./Snippets.ts');

module.exports = {

	get: {

		getData: (endpoint) => {

			const config = {
				method: 'get',
				url: apiBaseURL + '/' + endpoint,
				headers: {
					'Authorization': 'Bearer ' + snippets.getAccessToken(),
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			};

			return axiosClient(config);

		}

	},
	post: {

		setData: (endpoint, payload)  => {

			const config = {
				method: 'post',
				url: apiBaseURL + '/' + endpoint,
				headers: {
					'Authorization': 'Bearer ' + snippets.getAccessToken(),
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				data: payload
			};

			return axiosClient(config);

		}
	
	},
	put: {

		setData: (endpoint, payload) => {

			const config = {
				method: 'put',
				url: apiBaseURL + '/' + endpoint,
				headers: {
					'Authorization': 'Bearer ' + snippets.getAccessToken(),
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				data: payload
			};

			return axiosClient(config);

		}

	},
	delete: {
	
	},
	postData: (url, data, callbackSuccess, callbackError) => {
           
		axiosClient
			.request(
				{
					url: url, 
					data: qs.stringify(data), 
					method: 'post', 
					headers: {
						'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
					}
                  
				}
			)
			.then((res) => {
				callbackSuccess(res)
			})
			.catch((error) => {
				callbackError(error)
			}
			);
          
	},
	getData: (url, callbackSuccess, callbackError) => {
           
		axiosClient
			.request(
				{
					url: url, 
					method: 'get', 
					headers: {
						'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
					}
                  
				}
			)
			.then((res) => {
				callbackSuccess(res)
			})
			.catch((error) => {
				callbackError(error)
			}
			);
          
	},
}


import axiosClient from 'axios';

const apiConfig = require('../config/APIConfig.js');

const apiBaseURL = apiConfig.API_END_POINT;

const getAccessToken = () => {
	
	return '';
	
}

const requestGetData = (endpoint) => {
	
	const config = {
		method: 'get',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	};
	
	// @ts-ignore
	return axiosClient(config);
	
}

const requestPostData = (endpoint, payload) => {
	
	const config = {
		method: 'post',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};
	
	// @ts-ignore
	return axiosClient(config);
	
}

const requestPutData = (endpoint, payload) => {
	
	const config = {
		method: 'put',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};
	
	// @ts-ignore
	return axiosClient(config);
	
}

const postData = (endpoint, data, callbackSuccess, callbackError) => {
	
	axiosClient
		.request(
			{
				url: endpoint,
				data: JSON.stringify(data),
				method: 'post',
				headers: {
					'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
				}
				
			}
		)
		.then((res) => {
			callbackSuccess(res)
		})
		.catch((err) => {
				callbackError(err)
			}
		);
	
}

const getData = (endpoint, callbackSuccess, callbackError) => {
	
	axiosClient
		.request(
			{
				url: endpoint,
				method: 'get',
				headers: {
					'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
				}
				
			}
		)
		.then((res) => {
			callbackSuccess(res)
		})
		.catch((err) => {
				callbackError(err)
			}
		);
	
}

module.export = {requestGetData, requestPostData, requestPutData, getData, postData}
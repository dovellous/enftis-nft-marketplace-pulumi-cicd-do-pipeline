import axiosClient from 'axios';

const apiConfig = require('../config/APIConfig.ts');

const apiBaseURL = apiConfig.API_END_POINT;

const getAccessToken: Function = () => {
	
	return '';
	
}

const requestGetData: Function = (endpoint: string) => {
	
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

const requestPostData: Function = (endpoint: string, payload: any) => {
	
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

const requestPutData: Function = (endpoint: string, payload: any) => {
	
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

const postData: Function = (endpoint: string, data: any, callbackSuccess: any, callbackError: any) => {
	
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
		.then((res: any) => {
			callbackSuccess(res)
		})
		.catch((err: any) => {
				callbackError(err)
			}
		);
	
}

const getData: Function = (endpoint: string, callbackSuccess: any, callbackError: any) => {
	
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
		.then((res: any) => {
			callbackSuccess(res)
		})
		.catch((err: any) => {
				callbackError(err)
			}
		);
	
}

export {requestGetData, requestPostData, requestPutData, getData, postData}
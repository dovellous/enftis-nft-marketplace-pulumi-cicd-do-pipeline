import { API_BASE_URL } from '_helpers';

import axios from 'axios';

const axiosConfig: any = {
    
}

export const apiRequestGET = async (endpoint: string, data: any, externalURL:string) => {
    return await axios.get(`${externalURL || API_BASE_URL}${endpoint ? '/'+endpoint:''}`, data);
};

export const apiRequestPOST = async (endpoint: string, data: any, externalURL: string) => {
    return await axios.get(`${externalURL || API_BASE_URL}${endpoint ? '/'+endpoint:''}`, data);
};

export const apiRequestUPDATE = async (endpoint: string, data: any, externalURL: string) => {
    return await axios.get(`${externalURL || API_BASE_URL}${endpoint ? '/'+endpoint:''}`, data);
};

export const apiRequestPUT = async (endpoint: string, data: any, externalURL: string) => {
    return await axios.get(`${externalURL || API_BASE_URL}${endpoint ? '/'+endpoint:''}`, data);
};

export const apiRequestDELETE = async (endpoint: string, data: any, externalURL: string) => {
    return await axios.get(`${externalURL || API_BASE_URL}${endpoint ? '/'+endpoint:''}`, data);
};

export const apiRequestUPLOAD = async (endpoint: string, data: any, externalURL: string) => {
    return await axios.get(`${externalURL || API_BASE_URL}${endpoint ? '/'+endpoint:''}`, data);
};

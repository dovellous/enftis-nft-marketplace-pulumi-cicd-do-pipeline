import { FirebaseDatabaseService } from '_services';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

export const registerAPI = async (user: any) => {
  const response = await axios.post(API_URL + 'register', user);
  return response;
};

export const loginAPI = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(API_URL + 'login', credentials);
  return response;
};

export const saveUserToDatabase = async (credentials: { uid: string, email: string; password: string }) => {
  
  const response = await axios.post(API_URL + 'login', credentials);
  
  FirebaseDatabaseService.addItem(`/users/${credentials.uid}`, credentials);

  return response;

};
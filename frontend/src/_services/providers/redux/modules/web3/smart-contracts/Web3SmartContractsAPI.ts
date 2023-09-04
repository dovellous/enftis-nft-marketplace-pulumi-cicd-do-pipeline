import axios from 'axios';

const API_URL = 'http://localhost:5000/api/web3SmartContract/';

export const getContactBalance = async (user: any) => {
  const response = await axios.post(API_URL + 'txn', user);
  return response;
};

import { createAsyncThunk } from '@reduxjs/toolkit';

export const connectSmartContract = createAsyncThunk<any, any>(
  'web3SmartContract/connectSmartContract',
  async (params: any, thunkAPI) => {
    try {
      const smartContractObject: any = { test: 123 }; //await signInWithEmailAndPassword(auth, user.email, user.password);
      return smartContractObject;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const disconnectSmartContract = createAsyncThunk<string, boolean>(
  'web3SmartContract/disconnectSmartContract',
  async (clearCache: boolean, thunkAPI) => {
    try {
      if (clearCache) {
        return 'CLEAR CACHE';
      }
      return 'WALLET DISCONNECTION SUCESSFUL';
    } catch (error: any) {
      // Handle Errors here...
      return thunkAPI.rejectWithValue(false);
    }
  }
);

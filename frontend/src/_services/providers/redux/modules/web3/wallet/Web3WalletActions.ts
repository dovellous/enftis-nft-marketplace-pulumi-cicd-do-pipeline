import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateWalletNetwork = createAsyncThunk<any, any>(
  'web3Wallet/connectWallet',
  async (params: any, thunkAPI) => {
    try {
      const walletObject: any = { test: 123 }; //await signInWithEmailAndPassword(auth, user.email, user.password);
      return walletObject;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const connectWallet = createAsyncThunk<any, any>(
  'web3Wallet/connectWallet',
  async (params: any, thunkAPI) => {
    try {
      const walletObject: any = { test: 123 }; //await signInWithEmailAndPassword(auth, user.email, user.password);
      return walletObject;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const disconnectWallet = createAsyncThunk<string, boolean>(
  'web3Wallet/disconnectWallet',
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

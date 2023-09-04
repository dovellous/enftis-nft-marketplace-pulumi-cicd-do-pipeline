import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { connectWallet, IWeb3WalletState } from '.';

const initialState: IWeb3WalletState = {
  walletLoading: false,
  walletConnected: false,
  walletAddress: null,
  walletBalance: 0,
  walletErrors: null,
  networkName: null,
  networkId: 0,
  chainId: 0,
};

export const web3WalletInitialState: IWeb3WalletState = initialState;

export const web3WalletSlice = createSlice({
  name: 'web3Wallet',
  initialState,
  reducers: {  },
  extraReducers: (builder: any) => {
    builder
      .addCase(connectWallet.pending, (state: any) => {
        state.walletLoading = false;
        state.walletConnected = false;
        state.walletAddress = null;
        state.walletBalance = 0;
        state.walletErrors = null;
        state.networkName = null;
        state.networkId = 0;
        state.chainId = 0;
      })
      .addCase(connectWallet.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.walletLoading = false;
        state.walletConnected = false;
        state.walletAddress = null;
        state.walletBalance = 0;
        state.walletErrors = null;
        state.networkName = null;
        state.networkId = 0;
        state.chainId = 0;
      })
      .addCase(connectWallet.rejected, (state: any, action: PayloadAction<any>) => {
        state.walletLoading = false;
        state.walletConnected = false;
        state.walletAddress = null;
        state.walletBalance = 0;
        state.walletErrors = null;
        state.networkName = null;
        state.networkId = 0;
        state.chainId = 0;
      })
    
  }
});

//export const { connectWallet } = web3WalletSlice.actions;

export const web3WalletReducer = web3WalletSlice.reducer;
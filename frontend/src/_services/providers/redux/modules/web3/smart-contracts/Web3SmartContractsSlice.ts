import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { connectSmartContract, IWeb3SmartContractState } from '.';

const initialState: IWeb3SmartContractState = {
  smartContractLoading: false,
  smartContractConnected: false,
  smartContractAddress: null,
  smartContractBalance: 0,
  smartContractErrors: null,
  networkName: null,
  networkId: 0,
  chainId: 0,
};

export const web3SmartContractInitialState: IWeb3SmartContractState = initialState;

export const web3SmartContractSlice = createSlice({
  name: 'web3SmartContract',
  initialState,
  reducers: {  },
  extraReducers: (builder: any) => {
    builder
      .addCase(connectSmartContract.pending, (state: any) => {
        state.smartContractLoading = false;
        state.smartContractConnected = false;
        state.smartContractAddress = null;
        state.smartContractBalance = 0;
        state.smartContractErrors = null;
        state.networkName = null;
        state.networkId = 0;
        state.chainId = 0;
      })
      .addCase(connectSmartContract.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.smartContractLoading = false;
        state.smartContractConnected = false;
        state.smartContractAddress = null;
        state.smartContractBalance = 0;
        state.smartContractErrors = null;
        state.networkName = null;
        state.networkId = 0;
        state.chainId = 0;
      })
      .addCase(connectSmartContract.rejected, (state: any, action: PayloadAction<any>) => {
        state.smartContractLoading = false;
        state.smartContractConnected = false;
        state.smartContractAddress = null;
        state.smartContractBalance = 0;
        state.smartContractErrors = null;
        state.networkName = null;
        state.networkId = 0;
        state.chainId = 0;
      })
    
  }
});

//export const { connectSmartContract } = web3SmartContractSlice.actions;

export const web3SmartContractReducer = web3SmartContractSlice.reducer;
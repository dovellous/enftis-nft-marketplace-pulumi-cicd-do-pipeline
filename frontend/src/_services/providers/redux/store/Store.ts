import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authInitialState, authReducer } from '../modules';
// import { cartInitialState, cartReducer } from '../modules';
// import { web3SmartContractInitialState, web3SmartContractReducer } from '../modules';
// import { web3WalletInitialState, web3WalletReducer } from '../modules';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // cart: cartReducer,
    // web3SmartContract: web3SmartContractReducer,
    // web3Wallet: web3WalletReducer,
  },
  preloadedState: {
    auth: authInitialState,
    // cart: cartInitialState,
    // web3SmartContract: web3SmartContractInitialState,
    // web3Wallet: web3WalletInitialState,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
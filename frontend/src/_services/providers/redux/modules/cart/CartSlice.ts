import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToCart, ICurrency, emptyCart, ICartState, resetCart } from './';

const initialState: ICartState = {
  cartLoading: false,
  items: [],
  ethTotalAmount: 0,
  destinationWalletAddress: null,
  cartCurrency: ICurrency.USD,
  cartErrors: null
};

export const cartInitialState: ICartState = initialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder

      // Restore Cart
      .addCase(resetCart.pending, (state: any) => {
        state.cartLoading = true;
        state.items = [];
        state.ethTotalAmount = 0;
        state.destinationWalletAddress = null;
        state.cartCurrency = ICurrency.USD;
        state.cartErrors = null;
      })
      .addCase(resetCart.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.cartLoading = false;
        state.items = action.payload;
        state.ethTotalAmount = 0; // Todo
        state.cartErrors = null;
      })
      .addCase(resetCart.rejected, (state: any, action: PayloadAction<any>) => {
        state.cartLoading = false;
        state.cartErrors = action.payload;
      })

      // Empty Cart
      .addCase(emptyCart.pending, (state: any) => {
        state.cartLoading = true;
        state.cartErrors = null;
      })
      .addCase(emptyCart.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.cartLoading = false;
        state.items = [];
        state.ethTotalAmount = 0; //Todo
        state.cartErrors = null;
      })
      .addCase(emptyCart.rejected, (state: any, action: PayloadAction<any>) => {
        state.cartLoading = false;
        state.items = [];
        state.cartErrors = action.payload;
      })

      //Add Item to cart
      .addCase(addToCart.pending, (state: any) => {
        state.cartLoading = true;
        state.cartErrors = null;
      })
      .addCase(addToCart.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.cartLoading = false;
        state.items = action.payload.newItems;
        state.ethTotalAmount = action.payload.newAmount;
        state.cartErrors = null;
        console.log('Added item: ' + action.payload.cartItem.title + ' to cart.')
      })
      .addCase(addToCart.rejected, (state: any, action: PayloadAction<any>) => {
        state.cartLoading = false;
        state.cartErrors = action.payload;
      })

  }
});

//export const { connectWallet } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
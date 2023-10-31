import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICartArray, ICartItem, ICartState } from './CartInterfaceTypes';
import { getUserCartItems } from '.';

export const addToCart = createAsyncThunk<any, any>(
  'cart/resetCart',
  async (cartItem: ICartItem, thunkAPI) => {
    try {
      const currentState: any = thunkAPI.getState();
      const newItems: ICartArray = [...currentState.items, cartItem];
      const newAmount: number = currentState.ethTotalAmount + cartItem.price;
      return { newItems, newAmount, cartItem };
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const resetCart = createAsyncThunk<any, any>(
  'cart/resetCart',
  async (loadFromAccount: boolean, thunkAPI) => {
    try {
      if (loadFromAccount) {
        // replace current value with those from account
        return getUserCartItems(1);
      } else {
        return [];
      };
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const emptyCart = createAsyncThunk(
  'cart/emptyCart',
  async (clearCache: boolean, thunkAPI) => {
    try {
      if (clearCache) {
        return [];
      }
      return [];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(false);
    }
  }
);

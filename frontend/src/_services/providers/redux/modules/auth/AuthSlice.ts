import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthLogin, IAuthState, loginWithEmailAndPassword, loginWithGoogle } from '.';

const initialState: IAuthState = {
  authLoading: false,
  loggedIn: false,
  user: null,
  errors: null
};

export const authInitialState: IAuthState = initialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {  },
  extraReducers: (builder: any) => {
    builder
      .addCase(loginWithEmailAndPassword.pending, (state: any) => {
        state.authLoading = true;
        state.loggedIn = false;
        state.user = null;
        state.errors = false;
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.authLoading = false;
        state.loggedIn = true;
        state.user = action.payload;
        state.errors = null;
      })
      .addCase(loginWithEmailAndPassword.rejected, (state: any, action: PayloadAction<any>) => {
        state.authLoading = false;
        state.loggedIn = false;
        state.user = null;
        state.errors = action.payload.errorMessage;
        console.log("LOGIN WITH EMAIL ERROR", action.payload.errorMessage);
      })

      // Login With Google
    .addCase(loginWithGoogle.pending, (state: any) => {
        state.authLoading = true;
        state.loggedIn = false;
        state.user = null;
        state.errors = false;
      })
      .addCase(loginWithGoogle.fulfilled, (state: any, action: PayloadAction<any>) => {
        
      console.log("GOOGLE USER:ACTION", action);
        state.authLoading = false;
        state.loggedIn = true;
        state.user = action.payload;
        state.errors = null;
      })
      .addCase(loginWithGoogle.rejected, (state: any, action: PayloadAction<any>) => {
        state.authLoading = false;
        state.loggedIn = false;
        state.user = null;
        state.errors = action.payload as string;
      })

  }
});

//export const { loginWithEmailAndPassword } = authSlice.actions;

export const authReducer = authSlice.reducer; 
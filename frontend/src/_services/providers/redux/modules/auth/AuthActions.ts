import { createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider } from "firebase/auth";
import { IAuthLogin, IAuthRegister } from '.';
import { IFirebaseUser } from '_services/firebase/converters/User';
import { FirebaseAuthService } from '_services/firebase/FirebaseAuthService';
import { FirebaseFirestoreService } from '_services/firebase/FirebaseFirestoreService';

export const loginWithEmailAndPassword = createAsyncThunk<IFirebaseUser, IAuthLogin>(
  'auth/loginWithEmailAndPassword',
  async (user: IAuthLogin, thunkAPI) => {
    try {
      if (user.remember) {
        // persist login for firebase here, or after login
      }
      const userCredential: any = await FirebaseAuthService.signInWithEmailAndPassword(user.email, user.password);
      const loggedInUser: any = userCredential.user;
      const token: any = userCredential.accessToken;
      const firebaseUser: IFirebaseUser = FirebaseAuthService.getFirebaseUser(loggedInUser, token);
      return firebaseUser;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const registerWithEmailAndPassword = createAsyncThunk<IFirebaseUser, IAuthRegister>(
  'auth/registerWithEmailAndPassword',
  async (user: IAuthLogin, thunkAPI) => {
    try {
      if (user.remember) {
        // persist login for firebase here, or after login
      }
      const userCredential: any = await FirebaseAuthService.createUserWithEmailAndPassword(user.email, user.password);
      const loggedInUser: any = userCredential.user;
      const token: any = userCredential.accessToken;
      const firebaseUser: IFirebaseUser = FirebaseAuthService.getFirebaseUser(loggedInUser, token);
      return firebaseUser;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return thunkAPI.rejectWithValue({ errorCode, errorMessage });
    }
  }
);

export const loginWithGoogle = createAsyncThunk<IFirebaseUser, boolean>(
  'auth/loginWithGoogle',
  async (userSessionPersist: boolean, thunkAPI) => {
    try {
      if (userSessionPersist) {
        // persist login for firebase here, or after login
      }
      const loggedInResult: any = await FirebaseAuthService.signInWithPopup();
      const userCredential: any = GoogleAuthProvider.credentialFromResult(loggedInResult);
      const loggedInUser: any = loggedInResult.user;
      const token: any = userCredential.accessToken;
      const firebaseUser: IFirebaseUser = FirebaseAuthService.getFirebaseUser(loggedInUser, token);
      FirebaseFirestoreService.collectionSetDocument('Users', firebaseUser.uid, firebaseUser);
      
      FirebaseFirestoreService.collectionSetDocument('Users', `${firebaseUser.uid}.login.history`, {providerGoogle: [new Date().getTime(), firebaseUser.uid]});

      return firebaseUser;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      return thunkAPI.rejectWithValue({ errorCode, errorMessage, email, credential });
    }
  }
);

export const logoutUser = createAsyncThunk<string, boolean>(
  'auth/logout',
  async (clearCache: boolean, thunkAPI) => {
    try {
      if (clearCache) {
        return 'CLEAR CACHE';
      }
      return 'USER LOG OUT SUCESSFUL';
    } catch (error: any) {
      // Handle Errors here...
      return thunkAPI.rejectWithValue(false);
    }
  }
);

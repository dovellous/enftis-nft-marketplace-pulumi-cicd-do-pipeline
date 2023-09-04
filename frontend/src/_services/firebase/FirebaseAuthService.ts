import { createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from "firebase/app";
import {
  getAuth, signInWithPopup, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, GoogleAuthProvider, updatePassword, sendEmailVerification, updateEmail, updateProfile, sendPasswordResetEmail
} from "firebase/auth";
import { FirebaseConfig, IFirebaseConfig } from './config/FirebaseConfig';
import { IFirebaseUser } from './converters/User';

class FirebaseAuthServiceClass {
// Initialize Firebase

  private app:any;
  private auth:any;
  private config: IFirebaseConfig;
  private providerGoogle: any;

  constructor() {
    this.config = FirebaseConfig;
    this.init();
    this.providerGoogle = new GoogleAuthProvider();

  }

  init(): void {
    this.app = initializeApp(this.config);
    this.auth = getAuth(this.app);
    return this.app;
  }

  connectAuth(): any {
    this.auth = getAuth(this.app);
    return this.auth;
  }

  getAuth(): any {
    return this.auth;
  }

  disconnectApp(): void {
    this.app.delete();
  }

  disconnectAuth(): void {
    this.auth = null;
  }

  getFirebaseUser(user?: any){

    if (!user) {
      user = this.auth.currentUser;
    }

    const firebaseUser: IFirebaseUser = {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      providerData: user.providerData[0]
    }

    return firebaseUser;

  }

  getFirebaseUsername() {
    const firebaseUser: IFirebaseUser = this.getFirebaseUser();
    if (firebaseUser.displayName) {
      return firebaseUser.displayName;
    } else if (firebaseUser.email) {
      return firebaseUser.email.split('@')[0];
    } else {
      return 'Anonymous user';
    }
  }

  signInWithPopup(): Promise<any> {
    return signInWithPopup(this.auth, this.providerGoogle);
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  updatePassword(password: any): Promise<any> {
    const user = this.auth.currentUser;
    return updatePassword(user, password);
  }

  updateEmail(email: any): Promise<any> {
    const user = this.auth.currentUser;
    return updateEmail(user, email);
  }

  updateProfile(data: any): Promise<any> {
    const user = this.auth.currentUser;
    return updateProfile(user, data);
  }

  sendEmailVerification(): Promise<any> {
    return sendEmailVerification(this.auth.currentUser);
  }

  sendPasswordResetEmail(email: any): Promise<any> {
    return sendPasswordResetEmail(this.auth, email);
  }

}

const FirebaseAuthService: any = new FirebaseAuthServiceClass();

export { FirebaseAuthService  };

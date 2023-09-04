// import dotenv from 'dotenv';
// dotenv.config();

export interface IFirebaseConfig {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
    storageBucket: string | undefined;
    messagingSenderId: string | undefined;
    appId: string | undefined;
    measurementId: string | undefined;
};

export const FirebaseConfig: IFirebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_GOOGLE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_GOOGLE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_GOOGLE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_GOOGLE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_GOOGLE_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_GOOGLE_FIREBASE_MEASUREMENT_ID,
};

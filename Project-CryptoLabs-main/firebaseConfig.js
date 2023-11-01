// Import the functions you need from the SDKs you need
import {getAuth, getReactNativePersistence,initializeAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_9JG8lHBxpi1LX66zqRIPZHiDs5e2GXg",
  authDomain: "fir-auth-dfe22.firebaseapp.com",
  projectId: "fir-auth-dfe22",
  storageBucket: "fir-auth-dfe22.appspot.com",
  messagingSenderId: "405395713478",
  appId: "1:405395713478:web:f7bfa121b78b79dfc6d6c7"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
// export const firebase_auth = getAuth(firebase_app);
export const auth = initializeAuth(firebase_app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
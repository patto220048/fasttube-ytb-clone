// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDjzaTepJq3KharGtLxRwgUz89DABl4ttE",
  authDomain: "fasttube-f26bd.firebaseapp.com",
  projectId: "fasttube-f26bd",
  storageBucket: "fasttube-f26bd.appspot.com",
  messagingSenderId: "685575168887",
  appId: "1:685575168887:web:54ab8eb5f8a5895053f772",
  measurementId: "G-SGK7EKT2LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const providerGG = new GoogleAuthProvider()
export default app
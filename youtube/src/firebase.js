// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCjMkdYIOKAoi_EoTyuVc6mUSe6HI8kRq8",
  authDomain: "video-dfa8f.firebaseapp.com",
  projectId: "video-dfa8f",
  storageBucket: "video-dfa8f.appspot.com",
  messagingSenderId: "581625775211",
  appId: "1:581625775211:web:27bba1925e1ec6219c9d2e",
  measurementId: "G-0665K6WHGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const providerGG = new GoogleAuthProvider()
export default app
// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD-f9MRMsI6aWF2NaUXtiv0p1HndaZxhrk",
  authDomain: "test-d15ea.firebaseapp.com",
  projectId: "test-d15ea",
  storageBucket: "test-d15ea.appspot.com",
  messagingSenderId: "709542863358",
  appId: "1:709542863358:web:8ab41a5562cb14a3b3e0af",
  measurementId: "G-8FZE988FMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const providerGG = new GoogleAuthProvider()
export default app
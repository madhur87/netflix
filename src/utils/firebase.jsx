// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9whB07Geu61j2RykSAsRKYuVfmsT1oic",
  authDomain: "netflixgpt87.firebaseapp.com",
  projectId: "netflixgpt87",
  storageBucket: "netflixgpt87.firebasestorage.app",
  messagingSenderId: "110180770750",
  appId: "1:110180770750:web:87365cf48d51c974f30fef",
  measurementId: "G-M7CF9QNJRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
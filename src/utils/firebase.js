// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYEsK5zvW7C5aUZpvW_Rjhvvstphs6cFE",
  authDomain: "netflixgpt-1c313.firebaseapp.com",
  projectId: "netflixgpt-1c313",
  storageBucket: "netflixgpt-1c313.appspot.com",
  messagingSenderId: "413391810448",
  appId: "1:413391810448:web:aac49bdb0b1c6c151c0d15",
  measurementId: "G-T7M29L90DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
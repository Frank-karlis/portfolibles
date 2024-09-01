// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "portfolibles-6689c.firebaseapp.com",
  projectId: "portfolibles-6689c",
  storageBucket: "portfolibles-6689c.appspot.com",
  messagingSenderId: "653950958235",
  appId: "1:653950958235:web:4c925473893682be77243e",
  measurementId: "G-WRNS6L8H0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
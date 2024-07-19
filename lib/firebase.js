// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolibles-96e4a.firebaseapp.com",
  projectId: "portfolibles-96e4a",
  storageBucket: "portfolibles-96e4a.appspot.com",
  messagingSenderId: "777357246097",
  appId: "1:777357246097:web:07cb217c1877b5d5548930"
};

// Initialize Firebase
const app = !getApps().lenght? initializeApp(firebaseConfig) :  getApp();
const db = getFirestore(app);
const storage=getStorage(app)

export { db,storage };

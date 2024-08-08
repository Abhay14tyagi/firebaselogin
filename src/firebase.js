// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISmAfr_lZQVuQvOObuxgbp1F1sukApD0",
  authDomain: "abhay-14022003.firebaseapp.com",
  projectId: "abhay-14022003",
  storageBucket: "abhay-14022003.appspot.com",
  messagingSenderId: "159348388862",
  appId: "1:159348388862:web:ef920d784e8e98e97f46af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;
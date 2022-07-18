// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByyagKOSAlnPlV3CBrR3NKBuwDNd-8mQ0",
  authDomain: "anklone.firebaseapp.com",
  projectId: "anklone",
  storageBucket: "anklone.appspot.com",
  messagingSenderId: "1063007089115",
  appId: "1:1063007089115:web:acf73b645fcfbf146eb7fe",
  measurementId: "G-EJHRW524WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

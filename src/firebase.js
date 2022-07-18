// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaEP1-6ZdQ2wl1C9P7A3MPj81rQGvhaow",
  authDomain: "for-job-38bbc.firebaseapp.com",
  projectId: "for-job-38bbc",
  storageBucket: "for-job-38bbc.appspot.com",
  messagingSenderId: "705831009691",
  appId: "1:705831009691:web:f3b4dbb8887280048eb53e",
  measurementId: "G-WNXEVF9RHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
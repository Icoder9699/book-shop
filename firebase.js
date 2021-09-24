https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_4ilndB0TUc-YQTDmUgsbSNJiByjZwgE",
  authDomain: "react-pizza-49fcf.firebaseapp.com",
  projectId: "react-pizza-49fcf",
  storageBucket: "react-pizza-49fcf.appspot.com",
  messagingSenderId: "188363839051",
  appId: "1:188363839051:web:6b67ef1a76d250c0d89fce",
  measurementId: "G-BNWLTBFEQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

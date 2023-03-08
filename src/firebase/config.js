// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlN2ngGmkSCbSLCi_dFP3wCRLNijWIjpE",
  authDomain: "prapp-b35d6.firebaseapp.com",
  projectId: "prapp-b35d6",
  storageBucket: "prapp-b35d6.appspot.com",
  messagingSenderId: "164128352511",
  appId: "1:164128352511:web:4a6b2af1a559ae05b344ca",
  measurementId: "G-FNBZBH4EGY"
};

// Initialize Firebase
export const PRapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(PRapp);
export const FirebaseAuth = getAuth(PRapp)
export const FirebaseDB = getFirestore(PRapp)
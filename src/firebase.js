// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJHbEiJW6Wy5u466o2aGH1fNk_fxRTJvg",
  authDomain: "react-portfolio-database.firebaseapp.com",
  projectId: "react-portfolio-database",
  storageBucket: "react-portfolio-database.appspot.com",
  messagingSenderId: "1015707731449",
  appId: "1:1015707731449:web:03604329db9fdec8c76928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
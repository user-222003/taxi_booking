// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp7bFu5cIKiQtRQfRYCIIcU3lCosyIJJA",
  authDomain: "taxi-app-arun.firebaseapp.com",
  projectId: "taxi-app-arun",
  storageBucket: "taxi-app-arun.appspot.com",
  messagingSenderId: "123871221830",
  appId: "1:123871221830:web:2324fe4de4b2b919fbd247",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-874b2.firebaseapp.com",
  projectId: "mern-estate-874b2",
  storageBucket: "mern-estate-874b2.firebasestorage.app",
  messagingSenderId: "41993926519",
  appId: "1:41993926519:web:516ece568a9dfe6d3a9372"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
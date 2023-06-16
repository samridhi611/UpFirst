// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKE9hliTSdNcneFUOwYBRUwKma13Nq3Rg",
  authDomain: "fir-auth-44b30.firebaseapp.com",
  projectId: "fir-auth-44b30",
  storageBucket: "fir-auth-44b30.appspot.com",
  messagingSenderId: "779691535802",
  appId: "1:779691535802:web:e7ff51f4fe336c75360183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
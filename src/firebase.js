import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUVN0jZJtX1zTpGQnZNabv-6yV0PkXVYA",
  authDomain: "apiworld-6b3b2.firebaseapp.com",
  projectId: "apiworld-6b3b2",
  storageBucket: "apiworld-6b3b2.appspot.com",
  messagingSenderId: "111520614029",
  appId: "1:111520614029:web:b5a67bdf0084aadc0a84c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZ3N-_ym_5SX-UbXv7lvEeFUrGLjkVJk",
  authDomain: "pollify-e197f.firebaseapp.com",
  projectId: "pollify-e197f",
  storageBucket: "pollify-e197f.firebasestorage.app",
  messagingSenderId: "453420493394",
  appId: "1:453420493394:web:3cf30dfa9efa1f56d5cd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
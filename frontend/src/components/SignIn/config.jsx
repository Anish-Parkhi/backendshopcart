import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAyqvWyst8ev-5URZHBQg9bZ25JcYRqJxg",
  authDomain: "e-commerce-c577d.firebaseapp.com",
  projectId: "e-commerce-c577d",
  storageBucket: "e-commerce-c577d.appspot.com",
  messagingSenderId: "654752486976",
  appId: "1:654752486976:web:c982f267230755bbf771a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}
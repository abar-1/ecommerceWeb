// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf79KD15yU9JyW-UCyMaKaHAxc9zHbqeQ", //hiding API key doesn't matter for firebase 
  authDomain: "ecomproj-bf5f3.firebaseapp.com",
  projectId: "ecomproj-bf5f3",
  storageBucket: "ecomproj-bf5f3.firebasestorage.app",
  messagingSenderId: "584739510722",
  appId: "1:584739510722:web:417c910e898cb8a48fde5b",
  measurementId: "G-FD6033E220"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
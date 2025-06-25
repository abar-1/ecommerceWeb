// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


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

//Sign in with google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) =>  {
  userAuth, additionalInformation = {}  
  if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    //If snapshot doesn't exist
    if(!userSnapshot.exists()) {
      //set snapshot in database
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName, 
          email, 
          createdAt,
          ...additionalInformation
        });
      }catch(error){
        console.log("error creating the user:", error.message);
      }
    }
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password){
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password){
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);

}
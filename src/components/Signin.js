"use client";

import SignUpForm from './sign-up/sign-up-form';
import styles from "./Signin.module.css";
import { useEffect } from 'react';
import { getRedirectResult, onAuthStateChanged } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../utils/firebase/firebase.utils';

export default function Signin() {

  const logGoogleUser = async () => {
    console.log("🧪 Signing in with Google Popup...");
    const { user } = await signInWithGooglePopup();
    console.log("✅ Popup sign-in successful:", user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div className={styles.formitya}><SignUpForm /></div>
      
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
}

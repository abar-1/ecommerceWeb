"use client";

import styles from "./Signin.module.css";
import { signInWithGooglePopup } from '../utils/firebase/firebase.utils';
export default function Signin() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1> Sign in page </h1>
            <button onClick={logGoogleUser}> Sign in with Google</button>
        </div>
 
    );
}
import styles from './sign-in.module.css';
import Image from 'next/image';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '@/utils/firebase/firebase.utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/store/user/user.action';

const defaultFormFields = {
    email: '',
    password: ''
}

export default function SignIn() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
           const { user } = await signInAuthUserWithEmailAndPassword(email, password);
           dispatch(setCurrentUser(user));
           resetFormFields();
        }catch(error){
            if (error.code === 'auth/wrong-password'){
                alert("Incorrect Password");
            }
            else if( error.code === 'auth/user-not-found'){
                alert("Email not found");
            }
        }   
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        dispatch(setCurrentUser(user));
        resetFormFields();
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formHeader}>Sign In</h1>
                

                <label className={styles.labels}>Email</label>
                <input className={styles.inputBoxes} type="email" name="email" value={email} onChange={handleChange} required />

                <label className={styles.labels}>Password</label>
                <input className={styles.inputBoxes} type="password" name="password" value={password} onChange={handleChange} required  />

                
                <a className={styles.signUpLink} href='/signup'> Create an Account</a>
                <button className={styles.submitButton} type="submit">Sign In</button>
                <button
                  type='button'
                  className={styles.googleButton}
                  onClick={signInWithGoogle}
                >
                  <Image 
                    src="/google.png"
                    alt="Google Logo"
                    width={40}
                    height={40}
                    className={styles.googleIcon}
                  />
                </button>

            </form>

        </div>
    );

}
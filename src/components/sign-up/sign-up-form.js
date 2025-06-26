import { useState, useEffect} from 'react';
import Image from 'next/image';
import styles from './sign-up-form.module.css';
import { auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '@/utils/firebase/firebase.utils';



const defaultFormFields = {

    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); //No default behavior

        if( password != confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            return userCredential;
            
        }catch(error){
            if (error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            }
            console.log("Error creating user: ", error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value}); //updating formFields
    }


    return(

        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.formHeader}>Sign Up</h1>
                
                <label className={styles.labels}>Display Name </label>
                <input className={styles.inputBoxes} type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label className={styles.labels}>Email</label>
                <input className={styles.inputBoxes} type="email" required onChange={handleChange} name="email" value={email}/>

                <label className={styles.labels}>Password</label>
                <input className={styles.inputBoxes} type="password" required onChange={handleChange} name="password" value={password}/>

                <label className={styles.labels}>Confirm Password</label>
                <input className={styles.inputBoxes} type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <a className={styles.signInLink} href='/signin'> Already Have an Account?</a>
                <button className={styles.submitButton} type="submit">Sign Up</button>
                {/* <button
                  type="button"
                  className={styles.googleButton}
                  onClick={logGoogleUser}
                >
                  <Image 
                    src="/google.png"
                    alt="Google Logo"
                    width={40}
                    height={40}
                    className={styles.googleIcon}
                  />
                </button> */}

            </form>


        </div>
    )

}
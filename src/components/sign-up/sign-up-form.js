import styles from './sign-up-form.module.css';

export default function SignUpForm() {

    
    return(

        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={() => {}}>
                <h1 className={styles.formHeader}>Sign Up</h1>
                
                <label className={styles.labels}>Display Name </label>
                <input className={styles.inputBoxes} type="text" required />

                <label className={styles.labels}>Email</label>
                <input className={styles.inputBoxes} type="email" required />

                <label className={styles.labels}>Password</label>
                <input className={styles.inputBoxes} type="password" required />

                <label className={styles.labels}>Confirm Password</label>
                <input className={styles.inputBoxes} type="password" required />

                <button className={styles.submitButton} type="submit">Sign Up</button>

            </form>


        </div>
    )

}
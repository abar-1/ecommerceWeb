import styles from './cartDropdown.module.css';

export default function cartDropdown() {

    return(

        <div className={styles.cartDropdownContainer}>
            <div className={styles.cartItems} />

            <button className={styles.goToCheckout}>Go to checkout</button>

        </div>
    );
}
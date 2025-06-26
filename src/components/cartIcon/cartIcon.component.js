import styles from './cartIcon.module.css';

export default function cartIcon() {
    return(
        <div className={styles.cartIconContainer}>
            <img src="/shoppingBag.svg" alt="Shopping bag" className={styles.shoppingIcon} />
            <span className={styles.itemCount}>0</span>      
        </div>
    );
}
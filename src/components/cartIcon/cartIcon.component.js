"use client";
import styles from './cartIcon.module.css';
import { useContext } from 'react';
import { CartContext } from '@/contexts/cart.context';

export default function cartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className={styles.cartIconContainer} onClick={toggleIsCartOpen}>
            <img src="/shoppingBag.svg" alt="Shopping bag" className={styles.shoppingIcon} />
            <span className={styles.itemCount}>{cartCount}</span>      
        </div>
    );
}
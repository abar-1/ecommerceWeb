import styles from './cartDropdown.module.css';
import CartItem from '../cartItem/cartItem.component';
import {useContext} from 'react';
import { CartContext } from '@/contexts/cart.context';
import Link from 'next/link';

export default function cartDropdown() {

    const {cartItems} = useContext(CartContext);
    return(

        <div className={styles.cartDropdownContainer}>
            <div className={styles.cartItems}>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Link href="/checkout" className={styles.goToCheckoutLink}>
                <button className={styles.goToCheckout}>Go to checkout</button>
            </Link>

        </div>
    );
}
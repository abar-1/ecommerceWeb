import styles from './cartDropdown.module.css';
import CartItem from '../cartItem/cartItem.component';
import {useContext} from 'react';
import { CartContext } from '@/contexts/cart.context';

export default function cartDropdown() {

    const {cartItems} = useContext(CartContext);
    return(

        <div className={styles.cartDropdownContainer}>
            <div className={styles.cartItems}>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <button className={styles.goToCheckout}>Go to checkout</button>

        </div>
    );
}
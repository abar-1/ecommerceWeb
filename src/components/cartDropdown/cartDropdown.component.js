import styles from './cartDropdown.module.css';
import CartItem from '../cartItem/cartItem.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/store/cart/cart.selector';
import Link from 'next/link';

export default function CartDropdown() {
    const cartItems = useSelector(selectCartItems);
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
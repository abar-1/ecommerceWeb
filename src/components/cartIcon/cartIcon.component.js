"use client";
import styles from './cartIcon.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '@/store/cart/cart.action';
import { selectIsCartOpen, selectCartCount } from '@/store/cart/cart.selector';

export default function CartIcon() {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    return(
        <div className={styles.cartIconContainer} onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
            <img src="/shoppingBag.svg" alt="Shopping bag" className={styles.shoppingIcon} />
            <span className={styles.itemCount}>{cartCount}</span>      
        </div>
    );
}
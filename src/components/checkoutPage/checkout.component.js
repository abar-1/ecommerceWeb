"use client";
import { useContext } from 'react';
import Image from 'next/image';
import styles from './checkout.module.css';
import { CartContext } from '@/contexts/cart.context';


export default function Checkout() {

    const { cartItems, updateItemQuantity, removeItemFromCart } = useContext(CartContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return(

        <div> 
            <div className={styles.cartItemContainer}>
                {cartItems.map((item, idx) => (
                    <div key={item.id || idx}>
                        <div className={styles.productImage}>
                            <img className={styles.actualImage} src={item.imageUrl} alt={item.name}  />
                        </div>
                        <div className={styles.details}>
                            <h2>{item.name}</h2>
                            <div className={styles.quantityContainer}>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className={styles.changeQuant}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className={styles.changeQuant}>+</button>
                                <button onClick={() => removeItemFromCart(item.id)} className={styles.removeButton}>Remove From Cart</button>
                            </div>
                            <div className={styles.price}>
                                <h3>${(item.price * item.quantity).toFixed(2)}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.end}>
                <div className={styles.total}>
                    <h2>Total: ${total.toFixed(2)}</h2>
                </div>
                <div className={styles.payButton}>
                    <button> Pay Now</button>
                </div>

            </div>
        </div>
    );
}
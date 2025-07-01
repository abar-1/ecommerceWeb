import styles from './cartItem.module.css';
import { useContext } from 'react';
import { CartContext } from '@/contexts/cart.context'

export default function cartItem({ cartItem }) {

    const{ name, quantity, imageUrl, price, id } = cartItem;
    const { updateItemQuantity, removeItemFromCart } = useContext(CartContext);

    const addQuantity = () => {
        updateItemQuantity(id, quantity + 1);
    }

    const reduceQuantity = () => {
        updateItemQuantity(id, quantity - 1);
    }

    const removeItem = () => {
        removeItemFromCart(id);
    }

    return(
        <div className={styles.cartItemContainer}>
            <div className={styles.picture}>
                <img className={styles.actualImage} src={imageUrl} alt={name} />
            </div>
            <div className={styles.details}>
                <h2> {name} </h2>
                <div className={styles.quantityContainer}>
                    <button className={styles.changeQuant} onClick={reduceQuantity}>-</button> 
                    <span> {quantity} </span> 
                    <button className={styles.changeQuant} onClick={addQuantity}>+</button>
                </div>
                <p> ${(price * quantity).toFixed(2)} </p> 
                <button className={styles.removeButton} onClick={removeItem}>Remove</button>
            </div>
        </div>

    );
}
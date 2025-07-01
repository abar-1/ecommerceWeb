import styles from './shop.module.css';
import { useContext } from 'react';
import { CartContext } from '@/contexts/cart.context';




export default function ProductCard({ product }) {

    const {id, imageUrl, name, price, type} = product;

    const { addItemToCart} = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return(
        <div key={id} className={styles.card} id={type}>
            <div className={styles.picture}>
                <img src={imageUrl} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.name}>{name}</h1>
                <h1 className={styles.price}>${Number(price).toFixed(2)}</h1>
            </div>
            <button className={styles.addToCart} onClick ={addProductToCart}>Add to Cart</button>
        </div>
    );
}
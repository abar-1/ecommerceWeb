import styles from './shop.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/cart/cart.action';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const { id, imageUrl, name, price, type } = product;

    const addProductToCart = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <div key={id} className={styles.card} id={type}>
            <div className={styles.picture}>
                <img src={imageUrl} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.name}>{name}</h1>
                <h1 className={styles.price}>${Number(price).toFixed(2)}</h1>
            </div>
            <button className={styles.addToCart} onClick={addProductToCart}>
                Add to Cart
            </button>
        </div>
    );
}
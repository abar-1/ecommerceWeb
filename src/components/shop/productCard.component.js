import styles from './shop.module.css';

export default function ProductCard({id, imageUrl, name, price}) {
    return(
        <div key={id} className={styles.card}>
            <div className={styles.picture}>
                <img src={imageUrl} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.name}>{name}</h1>
                <h1 className={styles.price}>${Number(price).toFixed(2)}</h1>
            </div>
            <button className={styles.addToCart}>Add to Cart</button>
        </div>
    );
}
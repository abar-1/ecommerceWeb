import Category from "./Category.js";
import styles from "./Category.module.css";

export default function Directory() {

    const categories = [
        { title: "Graphic Tees", sub: "Shop Now!", imageUrl:"/graphicTee.png" },
        { title: "Shorts", sub: "Shop Now!", imageUrl:"/shorts.png" },
        { title: "Pants", sub: "Shop Now!", imageUrl: "/pants.png"},
        { title: "Pullovers", sub: "Shop Now!", imageUrl: "/hoodie.png"},
        { title: "Shoes", sub: "Shop Now!", imageUrl:"/sambas.png"}
      ];

    return(
        <div className={styles.grid}>
            {categories.map(({title, sub, imageUrl}, idx) => (
                <Category category={title} index={idx} imageUrl={imageUrl} subtitle={sub} key={idx} />
            ))}
            <div className={styles.logoSlot}>
                <h1>Men's Clothing<br />PopUp</h1>
            </div>
        </div>
    );
}
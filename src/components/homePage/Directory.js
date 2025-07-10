import Category from "./Category.js";
import styles from "./Category.module.css";

export default function Directory() {

    const categories = [
        { title: "Graphic Tees", sub: "Shop Now!", imageUrl:"/graphicTee.png", link: "/shop#graphic-tees" },
        { title: "Shorts", sub: "Shop Now!", imageUrl:"/shorts.png", link: "/shop#shorts" },
        { title: "Pants", sub: "Shop Now!", imageUrl: "/pants.png", link: "/shop#pants" },
        { title: "Pullovers", sub: "Shop Now!", imageUrl: "/hoodie.png", link: "/shop#pullovers" },
        { title: "Shoes", sub: "Shop Now!", imageUrl:"/sambas.png", link: "/shop#shoes" }
      ];

    return(
        <div className={styles.grid}>
            {categories.map(({title, sub, imageUrl, link}, idx) => (
                <Category category={title} index={idx} imageUrl={imageUrl} subtitle={sub} key={idx} link={link}/>
            ))}
            <div className={styles.logoSlot}>
                <h1 className={styles.text}>Men&apos;s Clothing<br />PopUp</h1>
            </div>
        </div>
    );
}
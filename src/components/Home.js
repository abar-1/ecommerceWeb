import styles from "./Home.module.css";

export default function Home() {

    const categories = [
        { title: "Graphic Tees", sub: "Shop Now!", imageUrl:"/graphicTee.png" },
        { title: "Shorts", sub: "Shop Now!", imageUrl:"/shorts.png" },
        { title: "Pants", sub: "Shop Now!", imageUrl: "/pants.png"},
        { title: "Pullovers", sub: "Shop Now!", imageUrl: "/hoodie.png"},
        { title: "Shoes", sub: "Shop Now!", imageUrl:"/sambas.png"}
      ];
    
      return (
        <div className={styles.grid}>
          {categories.map(({ title, sub, imageUrl }, index) => (
            <div className={`${styles.card} ${styles["card" + index]}`} key={index} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"}} >
              <div className={styles.content}>
                  <h2>{title}</h2>
                  <p>{sub}</p>
              </div>  
             
          
            
          </div>  
          ))}
          <div className={styles.logoSlot}>
             <h1>Streetwear<br />PopUp</h1>
            </div>
        </div>
      );
}
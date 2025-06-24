import styles from "./Category.module.css";

export default function Category({ category, index, imageUrl, subtitle }) {
  return (
    <div
      className={`${styles.card} ${styles["card" + index]}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.content}>
        <h2>{category}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}



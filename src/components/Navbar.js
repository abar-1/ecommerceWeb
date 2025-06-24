import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/home" className={styles.logo}>
          <Image 
            src="/house.png"
            width={30}
            height={30}
            alt="Home Icon"
          />
        </Link>
        <div className={styles.links}>
          <Link href="/shop" className={styles.link}>
            Shop
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
          <Link href="/signin" className={styles.link}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
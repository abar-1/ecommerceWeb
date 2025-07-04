"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useContext } from 'react';
import { signOutUser } from "@/utils/firebase/firebase.utils";

import { UserContext } from "@/contexts/users.context";
import { signOut } from "firebase/auth";

import CartIcon from "../cartIcon/cartIcon.component";
import CartDropdown from "../cartDropdown/cartDropdown.component";
import { CartContext } from "@/contexts/cart.context";

export default function Navbar() {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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
            {
              currentUser ? (
                <span className={styles.link} href='/signin' onClick={signOutUser}> Sign Out </span>
              ) : (
                <Link className={styles.link} href='/signin'> Sign in </Link>                 
              )
            }
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown />}
      </div>
    </nav>
  );
}
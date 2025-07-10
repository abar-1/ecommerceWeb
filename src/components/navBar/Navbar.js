"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';

import { signOutStart } from "@/store/user/user.action";
import { selectCurrentUser } from '@/store/user/user.selector'

import CartIcon from "../cartIcon/cartIcon.component";
import CartDropdown from "../cartDropdown/cartDropdown.component";
import { signOut } from "firebase/auth";


export default function Navbar() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(state => state.cart.isCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
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
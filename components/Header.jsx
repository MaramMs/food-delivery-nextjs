import Image from 'next/image'
import React from 'react'
import styles from '../styles/header.module.css'
import logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo' width={50}  height={50}/>
        <span>Fudo</span>
      </div>
 

 <ul className={styles.menu}>
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>
 </ul>

 <div className={styles.cart}>
    <UilShoppingBag size={50}/>
    <span>1</span>
 </div>
    </div>
  )
}

export default Header
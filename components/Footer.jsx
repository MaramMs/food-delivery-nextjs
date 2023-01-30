import Image from "next/image";
import React from "react";
import logo from "../assets/Logo.png";
import {UilFacebook ,UilGithub,UilInstagram} from '@iconscout/react-unicons'
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyRight}> All Right deserved</p>

      <div className={styles.social}>
       <UilFacebook size={50}/>
       <UilGithub size={50}/>
       <UilInstagram size={50}/>
      </div>

      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  );
};

export default Footer;

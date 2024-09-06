import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="#menu" className={styles.navBtn} rel="noreferrer">
        
          Order now
        
      </Link>
    </div>
  );
};

export default NavLinks;

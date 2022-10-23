import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="#menu">
        <a className={styles.navBtn} rel="noreferrer">
          Order now
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;

import React from "react";
import styles from "../Style/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Mohamadreza Karimian</div>
        <div className={styles.text}>Quest 2</div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import CardList from "../Components/CardList";
import styles from "../Style/Section.module.css";


function Section() {
  return (
    <div className={styles.container}>
      <CardList />
    </div>
  );
}

export default Section;

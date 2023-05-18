import React from "react";
import styles from "./Popup.module.scss";

const Popup = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.overlay}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + item.src}
          alt={"flower image"}
        />
      </div>
    </div>
  );
};

export default Popup;

import React from "react";
import styles from "./FrontPageFlowerCard.module.scss";

const FrontPageFlowerCard = ({ item, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(item)}>
      <div className={styles.chapter}>{item.chapter}</div>
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
  );
};

export default FrontPageFlowerCard;

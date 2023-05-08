import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { BasketContext } from "../../../Context/BasketContext";

const Card = ({ item }) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={item.img} alt="flower" className={styles.img} />
      </div>
      <div>
        <div className={styles.cardText}>
          <span>{item.name}</span>
          <span>{item.id}</span>
          <span>{item.price + "$"}</span>
        </div>
        <div className={styles.cardBottom}>
          <div className="potColor">
            <span>Pot color</span>
            <div className={styles.colors}>
              <div className={[styles.color, styles.black].join(" ")} />
              <div className={[styles.color, styles.ocher].join(" ")} />
              <div className={[styles.color, styles.white].join(" ")} />
              <div className={[styles.color, styles.brown].join(" ")} />
            </div>
          </div>
          <button className={styles.btn} onClick={() => addToBasket(item)}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

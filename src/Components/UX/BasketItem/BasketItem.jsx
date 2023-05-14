import React, { useContext } from "react";
import styles from "./BasketItem.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BasketContext } from "../../../Context/BasketContext";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const BasketItem = ({ item }) => {
  const { removeFromBasket, incrementCount, decrementCount } =
    useContext(BasketContext);

  return (
    <div className={styles.basketBody}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={item.img} alt="product img" />
      </div>
      <div className={styles.textField}>{item.name}</div>
      <div className={styles.countWrapper}>
        <input
          className={styles.count}
          type="number"
          min="1"
          max="100"
          value={item.quantity}
          onChange={() => {}}
        />
        <div className={styles.btnsWrapper}>
          <button
            className={styles.arrowBtn}
            onClick={() => incrementCount(item)}
          >
            <GoChevronUp />
          </button>
          <button
            className={styles.arrowBtn}
            onClick={() => decrementCount(item)}
          >
            <GoChevronDown />
          </button>
        </div>
      </div>
      <div className={styles.textField}>{item.price * item.quantity}</div>
      <div className={styles.textField}>
        <button
          onClick={() => removeFromBasket(item)}
          className={styles.deleteBtn}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;

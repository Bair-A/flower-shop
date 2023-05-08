import React, { useContext } from "react";
import styles from "./BasketPage.module.scss";
import { BasketContext } from "../../../Context/BasketContext";

const BasketPage = () => {
  const { addToBasket, removeFromBasket, products } = useContext(BasketContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shopping basket</h1>
        <div className={styles.basket}>
          <div className={styles.basketHeader}>
            <div className={styles.basketHeaderName}>name</div>
            <div className={styles.basketHeaderQuantity}>quantity</div>
            <div className={styles.basketHeaderCost}>cost</div>
          </div>
          <div className={styles.basketBody}>
            <div>img</div>
            <div>name of product</div>
            <div>quantity of product</div>
            <div>cost of product</div>
            <div>X</div>
          </div>
          <div className={styles.basketFooter}>
            <div className={styles.totalQuantity}>3 quantity</div>
            <div className={styles.totalPrice}>300 total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

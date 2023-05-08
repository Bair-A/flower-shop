import React, { useContext } from "react";
import styles from "./BasketPage.module.scss";
import { BasketContext } from "../../../Context/BasketContext";

const BasketPage = () => {
  const { removeFromBasket, products } = useContext(BasketContext);
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
          {products.map((item) => (
            <div className={styles.basketBody}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} src={item.img} alt="product img" />
              </div>
              <div>{item.name}</div>
              <div>quantity of product</div>
              <div>{item.price}</div>
              <div>X</div>
            </div>
          ))}
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

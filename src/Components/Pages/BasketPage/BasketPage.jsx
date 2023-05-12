import React, { useContext, useEffect, useState } from "react";
import styles from "./BasketPage.module.scss";
import { BasketContext } from "../../../Context/BasketContext";
import BasketItem from "../../UX/BasketItem/BasketItem";

const BasketPage = () => {
  const { products } = useContext(BasketContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (products.length) {
      setTotalPrice(
        products.reduce((sum, item) => {
          return sum + item.price * item.quantity;
        }, 0)
      );
    } else {
      setTotalPrice(0);
    }
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Shopping basket</h1>
        <div className={styles.basket}>
          <div className={styles.basketHeader}>
            <div className={styles.basketHeaderName}>name</div>
            <div className={styles.basketHeaderQuantity}>quantity</div>
            <div className={styles.basketHeaderCost}>total price</div>
          </div>
          {products.map((item) => (
            <BasketItem item={item} key={item.id} />
          ))}
          <div className={styles.basketFooter}>
            <div className={styles.totalQuantity}>
              {products.length} quantity
            </div>
            <div>{totalPrice} total</div>
          </div>
        </div>
        <div className={styles.basketBtns}>
          <button className={styles.clear}>Clear</button>
          <button className={styles.buy}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

import React, { useContext, useEffect, useState } from "react";
import styles from "./BasketPage.module.scss";
import { BasketContext } from "../../../Context/BasketContext";
import BasketItem from "../../UX/BasketItem/BasketItem";
import className from "classnames";

const BasketPage = () => {
  const { products, clearBasket } = useContext(BasketContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const btn = className([styles.btn], {
    [styles.disabled]: !products.length,
  });

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
  const buyBtnHandler = () => {
    alert("sorry! the buying functionality is not working yet");
  };

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
          <button className={btn} onClick={clearBasket}>
            Clear
          </button>
          <button className={btn} onClick={buyBtnHandler}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

import React, { useContext, useEffect, useState } from "react";
import styles from "./BasketPage.module.scss";
import { BasketContext } from "../../../Context/BasketContext";
import { AiOutlineClose } from "react-icons/ai";

const BasketPage = () => {
  const { removeFromBasket, products } = useContext(BasketContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (products.length) {
      setTotalPrice(
        products.reduce((sum, item) => {
          return sum + item.price;
        }, 0)
      );
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
            <div className={styles.basketHeaderCost}>cost</div>
          </div>
          {products.map((item) => (
            <div className={styles.basketBody} key={item.id}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} src={item.img} alt="product img" />
              </div>
              <div>{item.name}</div>
              <div>quantity of product</div>
              <div>{item.price}</div>
              <div>
                <button
                  onClick={() => removeFromBasket(item)}
                  className={styles.deleteBtn}
                >
                  <AiOutlineClose className={styles.deleteBtnIcon} />
                </button>
              </div>
            </div>
          ))}
          <div className={styles.basketFooter}>
            <div className={styles.totalQuantity}>
              {products.length} quantity
            </div>
            <div className={styles.totalPrice}>{totalPrice} total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

import React, { useContext } from "react";
import styles from "./BasketItem.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BasketContext } from "../../../Context/BasketContext";

const BasketItem = ({ item }) => {
  // const [count, setCount] = useState();
  const { removeFromBasket, changeCount, incrementCount, decrementCount } =
    useContext(BasketContext);

  return (
    <div className={styles.basketBody}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={item.img} alt="product img" />
      </div>
      <div>{item.name}</div>
      <div className={styles.count}>
        <input
          className={styles.input}
          type="number"
          min="1"
          max="100"
          value={item.quantity}
          onChange={(e) => changeCount(item, e.target.value)}
        />
      </div>
      <div>{item.price}</div>
      <div>
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

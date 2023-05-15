import React from "react";
import styles from "./SelectProduct.module.css";

const SelectProduct = ({ options, title, onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="selectProduct">
        {title}
      </label>
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          name="product"
          id="selectProduct"
          onChange={onSelect}
        >
          {options.map((item) =>
            item.selected ? (
              <option selected value={item.value} key={item.value}>
                {item.name}
              </option>
            ) : (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default SelectProduct;

import React, { useContext } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import styles from "./IconsList.module.scss";
import { BasketContext } from "../../../Context/BasketContext";
import { NavHashLink } from "react-router-hash-link";

const icons = [
  { to: "/SearchPage", icon: <FiSearch />, id: 0 },
  { to: "/PersonalPage", icon: <FiUser />, id: 1 },
  { to: "/BasketPage", icon: <FiShoppingCart />, id: 2 },
];

const IconsList = () => {
  const { products } = useContext(BasketContext);
  return (
    <ul className={styles.list}>
      {icons.map((item) => (
        <li className={styles.listItem} key={item.id}>
          {item.id === 2 ? (
            <>
              <label>
                {products.length}
                <NavHashLink to={item.to} id="basket" className={styles.link}>
                  {item.icon}
                </NavHashLink>
              </label>
            </>
          ) : (
            <NavHashLink to={item.to} className={styles.link}>
              {item.icon}
            </NavHashLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default IconsList;

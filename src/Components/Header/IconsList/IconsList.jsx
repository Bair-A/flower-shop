import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import styles from './IconsList.module.scss';

const icons = [{to: "/SearchPage", icon: <FiSearch/>}, {to: "/PersonalPage", icon: <FiUser/>}, {
   to: "/BasketPage",
   icon: <FiShoppingCart/>
}]

const IconsList = () => {
   return (
      <ul className={styles.list}>
         {
            icons.map((item) =>
               <li className={styles.listItem}>
                  <NavHashLink to={item.to} className={styles.link}>
                     {item.icon}
                  </NavHashLink>
               </li>
            )
         }
      </ul>
   );
};

export default IconsList;
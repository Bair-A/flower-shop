import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import styles from './IconsList.module.scss';

const icons = [{to: "/SearchPage", icon: <FiSearch/>, id: 0}, {to: "/PersonalPage", icon: <FiUser/>, id: 1},
   {to: "/BasketPage", icon: <FiShoppingCart/>, id: 2}]

const IconsList = () => {
   return (
      <ul className={styles.list}>
         {
            icons.map((item) =>
               <li className={styles.listItem} key={item.id}>
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
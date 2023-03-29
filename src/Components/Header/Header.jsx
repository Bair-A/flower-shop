import React from 'react';
import {FiShoppingCart, FiUser, FiSearch} from "react-icons/fi";
import styles from './Header.module.scss';

const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <ul className={styles.menu}>
                  <li className={styles.menuItem}>
                     <a href="#">Shop</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#">Products</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#">Fertilizer</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#">Guide</a>
                  </li>
               </ul>
               <div className={styles.iconsPanel}>
                  <a href="#"><FiSearch className={styles.icon}/></a>
                  <a href="#"><FiUser className={styles.icon}/></a>
                  <a href="#"><FiShoppingCart className={styles.icon}/></a>
               </div>
            </div>
         </div>
      </div>
   )
      ;
};

export default Header;
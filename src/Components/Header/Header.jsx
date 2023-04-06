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
                     <a href="#flower_gallery">Flower gallery</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#pots_gallery">Flower pots</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#reviews">Reviews</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#contacts">Our contacts</a>
                  </li>
               </ul>
               <img src={process.env.PUBLIC_URL + '/img/Logo.svg'} alt=""/>
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
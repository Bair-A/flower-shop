import React from 'react';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <ul className={styles.menu}>
                  <li className={styles.menuItem}>
                     <Link to="/">Home page</Link>
                  </li>
                  <li className={styles.menuItem}>
                     <Link to="/">Flowers</Link>
                  </li>
                  <li className={styles.menuItem}>
                     <Link to="/">Pots</Link>
                  </li>
               </ul>
               <img src={process.env.PUBLIC_URL + '/img/Logo.svg'} alt=""/>
               <div className={styles.iconsPanel}>
                  <Link href="#"><FiSearch className={styles.icon}/></Link>
                  <Link href="#"><FiUser className={styles.icon}/></Link>
                  <Link href="#"><FiShoppingCart className={styles.icon}/></Link>
               </div>
            </div>
         </div>
      </div>
   );
};
// <ul className={styles.menu}>
//    <li className={styles.menuItem}>
//       <a href="#flower_gallery">Flower gallery</a>
//    </li>
//    <li className={styles.menuItem}>
//       <a href="#pots_gallery">Flower pots</a>
//    </li>
//    <li className={styles.menuItem}>
//       <a href="#reviews">Reviews</a>
//    </li>
//    <li className={styles.menuItem}>
//       <a href="#contacts">Our contacts</a>
{/*   </li>*/
}
{/*</ul>*/
}

export default Header;
import React from 'react';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {

      return (
         <div className={styles.header}>
            <div className={styles.container}>
               <div className={styles.wrapper}>
                  <ul className={styles.menu}>
                     <li className={styles.menuItem}>
                        <NavLink to="/"
                                 className={styles.menuLink}>Home
                           page</NavLink>
                     </li>
                     <li className={styles.menuItem}>
                        <NavLink to="/FlowersPage"
                                 className={styles.menuLink}>Flowers</NavLink>
                     </li>
                     <li className={styles.menuItem}>
                        <NavLink to="/PotsPage" className={styles.menuLink}>Pots</NavLink>
                     </li>
                  </ul>
                  <img src={process.env.PUBLIC_URL + '/img/Logo.svg'} alt=""/>
                  <div className={styles.iconsPanel}>
                     <NavLink to="#"><FiSearch className={styles.icon}/></NavLink>
                     <NavLink to="#"><FiUser className={styles.icon}/></NavLink>
                     <NavLink to="#"><FiShoppingCart className={styles.icon}/></NavLink>
                  </div>
               </div>
            </div>
         </div>
      )
         ;
   }
;
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
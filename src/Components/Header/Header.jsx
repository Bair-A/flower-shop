import React, {useState} from 'react';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import {BiCaretUp} from "react-icons/bi";
import styles from './Header.module.scss';
import {HashLink, NavHashLink} from 'react-router-hash-link';
import classNames from 'classnames';

const Header = () => {
   const [burgerOpen, setBurgerOpen] = useState(false);
   const [pc, setPc] = useState(true);

   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      console.log('mob')
      // setPc(false);
   } else {
      // setPc(true);
      console.log('pc')
   }

   const home = classNames(
      [styles.menuItem],
      [styles.homeLink],
   )

   const burgerHandler = () => {
      setBurgerOpen(cur => !cur);
      document.body.classList.toggle("disableScrolling");
   }

   const burger = classNames(
      [styles.burger],
      {
         [styles.active]: burgerOpen,
      });

   const burgerList = classNames(
      [styles.burgerList],
      {
         [styles.burgerListActive]: burgerOpen,
      });

   const blackout = classNames(
      [styles.blackout],
      {
         [styles.blackoutActive]: burgerOpen,
      });

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <ul className={styles.menu}>
                  <li className={home}>
                     <NavHashLink to="/#home"
                                  className={[styles.menuLink, styles.homeMenuLink].join(' ')}
                     >Home<BiCaretUp className={styles.homeLinkArr}/></NavHashLink>
                     <ul className={styles.subMenu}>
                        <li>
                           <HashLink to="/#flower_gallery"
                                     className={styles.menuLink}
                           >Flowers</HashLink>
                        </li>
                        <li>
                           <HashLink to="/#pots_gallery"
                                     className={styles.menuLink}
                           >Pots</HashLink>
                        </li>
                        <li>
                           <HashLink to="/#reviews"
                                     className={styles.menuLink}
                           >Reviews</HashLink>
                        </li>
                        <li>
                           <HashLink to="/#contacts"
                                     className={styles.menuLink}
                           >Contacts</HashLink>
                        </li>
                     </ul>
                  </li>
                  <li className={styles.menuItem}>
                     <NavHashLink
                        to="/PotsPage"
                        className={styles.menuLink}
                     >Pots</NavHashLink>
                  </li>
                  <li className={styles.menuItem}>
                     <NavHashLink
                        to="/FlowersPage"
                        className={styles.menuLink}
                     >Flowers</NavHashLink>
                  </li>
               </ul>
               <div className={burger} onClick={burgerHandler}>
                  <span/>
               </div>
               <div className={burgerList} onClick={burgerHandler}>
                  <ul>
                     <li className={styles.burgerListItem}>
                        <NavHashLink to="/#home"
                                     className={[styles.menuLink, styles.homeMenuLink].join(' ')}
                        >Home<BiCaretUp className={styles.homeLinkArr}/></NavHashLink>
                        <ul className={styles.subMenu}>
                           <li>
                              <HashLink to="/#flower_gallery"
                                        className={styles.menuLink}
                              >Flowers</HashLink>
                           </li>
                           <li>
                              <HashLink to="/#pots_gallery"
                                        className={styles.menuLink}
                              >Pots</HashLink>
                           </li>
                           <li>
                              <HashLink to="/#reviews"
                                        className={styles.menuLink}
                              >Reviews</HashLink>
                           </li>
                           <li>
                              <HashLink to="/#contacts"
                                        className={styles.menuLink}
                              >Contacts</HashLink>
                           </li>
                        </ul>
                     </li>
                     <li className={styles.burgerListItem}>
                        <NavHashLink
                           to="/PotsPage"
                           className={styles.menuLink}
                        >Pots</NavHashLink>
                     </li>
                     <li className={styles.burgerListItem}>
                        <NavHashLink
                           to="/FlowersPage"
                           className={styles.menuLink}
                        >Flowers</NavHashLink>
                     </li>
                  </ul>
               </div>
               <div className={blackout} onClick={burgerHandler}/>
               <img src={process.env.PUBLIC_URL + '/img/Logo.svg'} alt=""/>
               <div className={styles.iconsPanel}>
                  <HashLink to="#"><FiSearch className={styles.icon}/></HashLink>
                  <HashLink to="#"><FiUser className={styles.icon}/></HashLink>
                  <HashLink to="#"><FiShoppingCart className={styles.icon}/></HashLink>
               </div>
            </div>
         </div>
      </div>
   );
};


export default Header;
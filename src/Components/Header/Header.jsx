import React, {useState} from 'react';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {HashLink, NavHashLink} from 'react-router-hash-link';
import classNames from 'classnames';

const Header = () => {
   const [burgerOpen, setBurgerOpen] = useState(false);
   const [menuActive, setMenuActive] = useState({
      home: false,
      flowers: false,
      pots: false,
      reviews: false,
      contacts: false,
   });

   const home = classNames(
      [styles.menuLink],
      {
         [styles.menuLinkActive]: menuActive.home,
      }
   )

   const flowers = classNames(
      [styles.menuLink],
      {
         [styles.menuLinkActive]: menuActive.flowers,
      }
   )

   const pots = classNames(
      [styles.menuLink],
      {
         [styles.menuLinkActive]: menuActive.pots,
      }
   )

   const reviews = classNames(
      [styles.menuLink],
      {
         [styles.menuLinkActive]: menuActive.reviews,
      }
   )

   const contacts = classNames(
      [styles.menuLink],
      {
         [styles.menuLinkActive]: menuActive.contacts,
      }
   )


   const burgerHandler = () => {
      setBurgerOpen(cur => !cur);
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
                  <li className={styles.menuItem}>
                     <HashLink to="/#home" className={home}
                               onClick={(prev) => setMenuActive({...prev, home: true})}>Home</HashLink>
                  </li>
                  <li className={styles.menuItem}>
                     <HashLink to="/#flower_gallery" className={flowers}
                               onClick={(prev) => setMenuActive({...prev, flowers: true})}>Flowers</HashLink>
                  </li>
                  <li className={styles.menuItem}>
                     <HashLink to="/#pots_gallery" className={pots}
                               onClick={(prev) => setMenuActive({...prev, pots: true})}>Pots</HashLink>
                  </li>
                  <li className={styles.menuItem}>
                     <HashLink to="/#reviews" className={reviews}
                               onClick={(prev) => setMenuActive({...prev, reviews: true})}>Reviews</HashLink>
                  </li>
                  <li className={styles.menuItem}>
                     <HashLink to="/#contacts" className={contacts}
                               onClick={(prev) => setMenuActive({...prev, contacts: true})}>Contacts</HashLink>
                  </li>
               </ul>
               <div className={burger} onClick={burgerHandler}>
                  <span/>
               </div>
               <div className={burgerList} onClick={burgerHandler}>
                  <ul>
                     <li className={styles.burgerListItem}>
                        <HashLink to="/#home" className={styles.menuLink}>Home</HashLink>
                     </li>
                     <li className={styles.burgerListItem}>
                        <HashLink to="/#flower_gallery" className={styles.menuLink}>Flowers</HashLink>
                     </li>
                     <li className={styles.burgerListItem}>
                        <HashLink to="/#pots_gallery" className={styles.menuLink}>Pots</HashLink>
                     </li>
                     <li className={styles.burgerListItem}>
                        <HashLink to="/#reviews" className={styles.menuLink}>Reviews</HashLink>
                     </li>
                     <li className={styles.burgerListItem}>
                        <HashLink to="/#contacts" className={styles.menuLink}>Contacts</HashLink>
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
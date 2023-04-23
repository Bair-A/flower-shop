import React, {useState} from 'react';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
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
                     <a href="#home" className={home} onClick={(prev) => setMenuActive({...prev, home: true})}>Home</a>
                     {/*<NavLink to="/"*/}
                     {/*         className={styles.menuLink}>Home*/}
                     {/*   page</NavLink>*/}
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#flower_gallery" className={flowers}
                        onClick={(prev) => setMenuActive({...prev, flowers: true})}>Flowers</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#pots_gallery" className={pots}
                        onClick={(prev) => setMenuActive({...prev, pots: true})}>Pots</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#reviews" className={reviews}
                        onClick={(prev) => setMenuActive({...prev, reviews: true})}>Reviews</a>
                  </li>
                  <li className={styles.menuItem}>
                     <a href="#contacts" className={contacts}
                        onClick={(prev) => setMenuActive({...prev, contacts: true})}>Contacts</a>
                  </li>
               </ul>
               <div className={burger} onClick={burgerHandler}>
                  <span/>
               </div>
               <div className={burgerList} onClick={burgerHandler}>
                  <ul>
                     <li className={styles.burgerListItem}>
                        <a href="#home" className={styles.menuLink}>Home</a>
                     </li>
                     <li className={styles.burgerListItem}>
                        <a href="#flower_gallery" className={styles.menuLink}>Flowers</a>
                     </li>
                     <li className={styles.burgerListItem}>
                        <a href="#pots_gallery" className={styles.menuLink}>Pots</a>
                     </li>
                     <li className={styles.burgerListItem}>
                        <a href="#reviews" className={styles.menuLink}>Reviews</a>
                     </li>
                     <li className={styles.burgerListItem}>
                        <a href="#contacts" className={styles.menuLink}>Contacts</a>
                     </li>
                  </ul>
               </div>
               <div className={blackout} onClick={burgerHandler}/>
               <img src={process.env.PUBLIC_URL + '/img/Logo.svg'} alt=""/>
               <div className={styles.iconsPanel}>
                  <NavLink to="#"><FiSearch className={styles.icon}/></NavLink>
                  <NavLink to="#"><FiUser className={styles.icon}/></NavLink>
                  <NavLink to="#"><FiShoppingCart className={styles.icon}/></NavLink>
               </div>
            </div>
         </div>
      </div>
   );
};


export default Header;
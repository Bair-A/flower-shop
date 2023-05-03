import React, {useEffect, useState} from 'react';
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";
import {BiCaretUp} from "react-icons/bi";
import styles from './Header.module.scss';
import {NavHashLink} from 'react-router-hash-link';
import classNames from 'classnames';
import SubMenu from './SubMenu/SubMenu';
import IconsList from './IconsList/IconsList';


const Header = () => {
   const [burgerOpen, setBurgerOpen] = useState(false);
   const [subMenuActive, setSubMenuActive] = useState(false);
   const [mobile, setMobile] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      window.addEventListener('resize', (e) => {
         setWindowWidth(window.innerWidth);
      });
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         setMobile(true);
      } else {
         setMobile(false);
      }
      return () => window.removeEventListener('resize', (e) => {
         setWindowWidth(window.innerWidth);
      });
   }, [windowWidth])

   const arrowHandler = (event) => {
      event.stopPropagation();
      if (mobile) {
         setSubMenuActive(!subMenuActive);
      }
   }

   const home = classNames(
      [styles.menuItem],
      {
         [styles.homeSubmenuPC]: !mobile,
         [styles.homeSubmenuMob]: subMenuActive,
      }
   )

   const subMenuHandler = () => {
      if (mobile) {
         setSubMenuActive(!subMenuActive)
      } else {
         if (!subMenuActive) setSubMenuActive(true);
      }
   }

   const subMenuHandlerOut = () => {
      if (subMenuActive) setSubMenuActive(false);
   }

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
                                  className={[styles.menuLink, styles.homeMenuLinkFlex].join(' ')}>
                        Home
                        <BiCaretUp className={styles.homeLinkArr}
                                   onClick={arrowHandler}/>
                     </NavHashLink>
                     <div className={styles.homeMenuContent}>
                        <SubMenu/>
                     </div>
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
                                     className={styles.menuLink}
                        >Home<BiCaretUp className={styles.homeLinkArr}/></NavHashLink>
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
               <IconsList/>
            </div>
         </div>
      </div>
   );
};


export default Header;
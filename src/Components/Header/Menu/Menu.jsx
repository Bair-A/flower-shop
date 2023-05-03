import React, {useEffect, useState} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import {BiCaretUp} from "react-icons/bi";
import SubMenu from '.././SubMenu/SubMenu';
import styles from "./Menu.module.scss";
import classNames from 'classnames';

const menuItems = [{to: "/#home", value: "Home", icon: <BiCaretUp/>},
   {to: "/PotsPage", value: "Pots"},
   {to: "/FlowersPage", value: "Flowers"}];

const Menu = () => {
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

   return (
      <ul className={styles.menu}>
         {menuItems.map(item =>
            <li className={item.icon ? home : styles.menuItem}
                key={item.value}>
               <NavHashLink to={item.to}
                            className={styles.menuLink}>
                  {item.value}
                  {item.icon && <BiCaretUp className={styles.homeLinkArr}
                                           onClick={arrowHandler}/>}
               </NavHashLink>
               {item.icon && <div className={styles.homeMenuContent}>
                  <div className={styles.homeMenuContent}>
                     <SubMenu/>
                  </div>
               </div>}
            </li>
         )}
      </ul>
   )
      ;
};

export default Menu;
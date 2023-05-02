import React from 'react';
import {HashLink} from 'react-router-hash-link';
import styles from './SubMenu.module.scss';
import classNames from 'classnames';

const SumMenuList = [{to: '/#flower_gallery', value: 'Flowers'},
   {to: '/#pots_gallery', value: 'Pots'}, {to: '/#reviews', value: 'Reviews'},
   {to: '/#contacts', value: 'Contacts'},]

const SubMenu = ({handler, active}) => {

   const subMenu = classNames(
      [styles.menu],
      {
         [styles.active]: active,
      }
   )

   return (
      <ul className={subMenu} onClick={handler}>
         {SumMenuList.map((item) =>
            <li key={item.value}>
               <HashLink className={styles.link} to={item.to}>
                  {item.value}
               </HashLink>
            </li>
         )}
      </ul>
   );
};

export default SubMenu;
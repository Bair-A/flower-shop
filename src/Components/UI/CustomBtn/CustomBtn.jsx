import React from 'react';
import {GiVineLeaf} from "react-icons/gi";
import styles from './CustomBtn.module.scss';
import classNames from 'classnames';

const CustomBtn = ({color, children, disabled, onClick}) => {

   const btnClasses = classNames(
      [styles.customBtn],
      {
         [styles.green]: color === 'green',
         [styles.white]: color === 'white',
         [styles.disabled]: disabled
      }
   )

   const topLeafClasses = classNames(
      [styles.btnDecorationTop],
      {
         [styles.whiteLeaf]: color === 'green',
         [styles.greenLeaf]: color === 'white'
      }
   )

   const bottomLeafClasses = classNames(
      [styles.btnDecorationBottom],
      {
         [styles.whiteLeaf]: color === 'green',
         [styles.greenLeaf]: color === 'white'
      }
   )

   return (
      <button
         onClick={onClick || (() => {
         })}
         className={btnClasses}>
         <GiVineLeaf className={topLeafClasses}/>
         {children}
         <GiVineLeaf className={bottomLeafClasses}/>
      </button>
   );
};

export default CustomBtn;
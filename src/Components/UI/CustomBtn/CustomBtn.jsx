import React from 'react';
import {GiVineLeaf} from "react-icons/gi";
import styles from './CustomBtn.module.scss';

const CustomBtn = ({color, children, disabled, onClick}) => {

   if (color === 'green') return (
      <button
         onClick={onClick}
         className={
            disabled ?
               [styles.loadMoreBtn, styles.green, styles.disabled].join(' ')
               :
               [styles.loadMoreBtn, styles.green].join(' ')
         }>
         <GiVineLeaf className={[styles.btnDecorationTop, styles.whiteLeaf].join(' ')}/>
         {children}
         <GiVineLeaf className={[styles.btnDecorationBottom, styles.whiteLeaf].join(' ')}/>
      </button>
   );

   if (color === 'white') return (
      <button
         className={
            [styles.loadMoreBtn, styles.white].join(' ')
         }>
         <GiVineLeaf className={[styles.btnDecorationTop, styles.greenLeaf].join(' ')}/>
         {children}
         <GiVineLeaf className={[styles.btnDecorationBottom, styles.greenLeaf].join(' ')}/>
      </button>
   )
};

export default CustomBtn;
import React from 'react';
import styles from './CustomerReviewCard.module.scss';

const CustomerReviewCard = ({item}) => {
   return (
      <div key={item.id}>
         <div className={styles.slideContent}>
            <div className={styles.textContent}>
               <h3 className={styles.slideHeader}>{item.name}</h3>
               <p className={styles.slideText}>{item.review}</p>
               <div className={styles.ratingWrapper}>
                  <div className={styles.rating} data-total-value={item.rating}>
                     <div className={styles.ratingItem} data-item-value='5'>✿</div>
                     <div className={styles.ratingItem} data-item-value='4'>✿</div>
                     <div className={styles.ratingItem} data-item-value='3'>✿</div>
                     <div className={styles.ratingItem} data-item-value='2'>✿</div>
                     <div className={styles.ratingItem} data-item-value='1'>✿</div>
                  </div>
                  <span>{item.date}</span>
               </div>
            </div>
            <div className={styles.imgWrapper}>
               <img className={styles.img} src={item.img} alt="review image"/>
            </div>
         </div>
      </div>
   );
};

export default CustomerReviewCard;
import React from 'react';
import styles from './PotsGalleryCard.module.scss';

const PotsGalleryCard = ({item}) => {
   return (
      <div>
         <div className={styles.imgWrapper}>
            <img src={item.img} alt="flower" className={styles.img}/>
         </div>
         <div>
            <div className={styles.cardText}>
               <span>{item.name}</span>
               <span>{item.price + '$'}</span>
            </div>
            <div className={styles.cardBottom}>
               <div className="potColor">
                  <span>Color</span>
                  <div className={styles.colors}>
                     <div className={[styles.color, styles.black].join(' ')}/>
                     <div className={[styles.color, styles.ocher].join(' ')}/>
                     <div className={[styles.color, styles.white].join(' ')}/>
                     <div className={[styles.color, styles.brown].join(' ')}/>
                  </div>
               </div>
               <button className={styles.btn}>Buy</button>
            </div>
         </div>
      </div>
   );
};

export default PotsGalleryCard;
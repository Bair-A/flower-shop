import React from 'react';
import styles from "./HomePageFlowerCard.module.scss";


const HomePageFlowerCard = ({src, alt}) => {
   return (
      <div className={styles.card}>
         <img className={styles.img} src={src} alt={alt}/>
      </div>
   );
};

export default HomePageFlowerCard;
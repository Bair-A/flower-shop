import React from 'react';
import styles from "./HomePageFlowerCard.module.scss";


const HomePageFlowerCard = ({src, alt, chapter, title, text}) => {
   return (
      <div className={styles.card}>
         <div className={styles.chapter}>{chapter}</div>
         <div className={styles.overlay}>
            <div className={styles.textWrapper}>
               <h2 className={styles.title}>{title}</h2>
               <p className={styles.text}>{text}</p>
            </div>
         </div>
         <img className={styles.img} src={src} alt={alt}/>
      </div>
   );
};

export default HomePageFlowerCard;
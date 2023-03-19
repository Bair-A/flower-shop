import React from 'react';
import styles from "./FirstPageContent.module.scss";
import {FaLongArrowAltRight} from "react-icons/fa";

const FirstPageContent = () => {
   return (
      <div className={styles.container}>
         <div className={styles.textContainer}>
            <h1 className={styles.mainTitle}>Happiness blooms from within</h1>
            <p className={styles.mainText}>
               Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
            </p>
            <div className={styles.btnContainer}>
               <button className={styles.showBtn}>
                  Shop now
               </button>
               <a className={styles.exploreLink} href="#"><span className={styles.exploreLinkText}>Explore plants</span>
                  <FaLongArrowAltRight/></a>
            </div>
         </div>
         <div className={styles.gallery}>
            <div className={styles.leftSideGallery}>
               <div className={styles.card}>
                  <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="#"/>
               </div>
               <div className={styles.card}>
                  <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="#"/>
               </div>
            </div>
            <div className={styles.rightSideGallery}>
               <div className={styles.card}>
                  <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt="#"/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FirstPageContent;
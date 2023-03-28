import React from 'react';
import styles from "./HomePageContent.module.scss";
import {FaLongArrowAltRight} from "react-icons/fa";


const HomePageContent = () => {
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
                  <img src={process.env.PUBLIC_URL + '/img/home/home_1.jpg'} alt="#"/>
               </div>
               <div className={styles.card}>
                  <img src={process.env.PUBLIC_URL + '/img/home/home_2.jpg'} alt="#"/>
               </div>
            </div>
            <div className={styles.rightSideGallery}>
               <div className={styles.card}>
                  <img src={process.env.PUBLIC_URL + '/img/home/home_3.jpg'} alt="#"/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePageContent;
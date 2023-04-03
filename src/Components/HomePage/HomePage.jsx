import React from 'react';
import styles from "./HomePage.module.scss";
import {FaLongArrowAltRight} from "react-icons/fa";
import HomePageFlowerCard from "../HomePageFlowerCard/HomePageFlowerCard";
import {GiVineLeaf} from "react-icons/gi";

const HomePage = () => {
   return (
      <div className={styles.homePage}>
         <div className={styles.container}>
            <div className={styles.contentWrapper}>
               <div className={styles.textContainer}>
                  <h1 className={styles.title}>Happiness blooms from within</h1>
                  <p className={styles.mainText}>
                     Our environment, the world in which we live and work, is a mirror of our attitudes and
                     expectations.
                  </p>
                  <div className={styles.btnContainer}>
                     <button className={styles.showBtn}>
                        <GiVineLeaf className={styles.btnDecorationTop}/>
                        Shop now
                        <GiVineLeaf className={styles.btnDecorationBottom}/>
                     </button>
                     <a className={styles.exploreLink} href="#"><span
                        className={styles.exploreLinkText}>Explore plants</span>
                        <FaLongArrowAltRight/></a>
                  </div>
               </div>
               <div className={styles.galleryWrapper}>
                  <div className={styles.gallery}>
                     <div>
                        <HomePageFlowerCard className={styles.card}
                                            src={process.env.PUBLIC_URL + '/img/home/home_1.jpg'}
                                            alt={"flower image"}
                                            chapter={"New"}
                                            title={"Peony"}
                                            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, saepe."}/>
                     </div>
                     <div className={styles.galleryItemBig}>
                        <HomePageFlowerCard src={process.env.PUBLIC_URL + '/img/home/home_2.jpg'}
                                            alt={"flower image"}
                                            chapter={"Popular"}
                                            title={"Bryophyta"}
                                            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, saepe."}/>
                     </div>
                     <div>
                        <HomePageFlowerCard src={process.env.PUBLIC_URL + '/img/home/home_3.jpg'}
                                            alt={"flower image"}
                                            chapter={"Featured"}
                                            title={"Lycopodiophyta"}
                                            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, saepe."}/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
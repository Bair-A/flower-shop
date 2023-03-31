import React from 'react';
import Slider from 'react-slick';
import styles from './CustomersReviews.module.scss';
import {GiLindenLeaf} from "react-icons/gi";

const CustomersReviews = () => {
   const settings = {
      dots: true, // infinite: true,
      slidesToShow: 1, slidesToScroll: 1, autoplay: true, speed: 2000, autoplaySpeed: 200000000, cssEase: 'linear'
   };
   return (<div className={styles.reviews}>
      <div className={styles.container}>
         <Slider {...settings}>
            <div>
               <div className={styles.slideContent}>
                  <div className={styles.textContent}>
                     <h3 className={styles.slideHeader}>1</h3>
                     <p className={styles.slideText}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae mollitia nesciunt non sequi.
                        Amet consequatur hic itaque repudiandae sapiente sed?</p>
                  </div>
                  <div className={styles.imgWrapper}>
                     <img className={styles.img} src={process.env.PUBLIC_URL + './img/flowers/1.jpg'} alt=""/>
                  </div>
               </div>
            </div>
            <div>
               <div className={styles.slideContent}>
                  <div className={styles.textContent}>
                     <h3 className={styles.slideHeader}>Daniel</h3>
                     <p className={styles.slideText}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae mollitia nesciunt non sequi.
                        Amet consequatur hic itaque repudiandae sapiente sed?</p>
                     <div className={styles.ratingWrapper}>
                        <div className={styles.rating}>
                           <GiLindenLeaf/>
                           <GiLindenLeaf/>
                           <GiLindenLeaf/>
                           <GiLindenLeaf/>
                           <GiLindenLeaf/>
                        </div>
                        <spun className={styles.date}>21.07.2022</spun>
                     </div>
                  </div>
                  <div className={styles.imgWrapper}>
                     <img className={styles.img} src={process.env.PUBLIC_URL + './img/flowers/1.jpg'} alt=""/>
                  </div>
               </div>
            </div>
         </Slider>
      </div>
   </div>);
};

export default CustomersReviews;
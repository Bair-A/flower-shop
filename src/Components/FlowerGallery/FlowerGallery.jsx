import React, {useEffect, useState} from 'react';
import styles from './FlowerGallery.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {flowers} from '../mock';
import Loader from '../UI/Loader';
import axios from "axios";
import {normalizeArr} from '../Utils/Utils';


const FlowerGallery = () => {
   const [flowersArr, setFlowersArr] = useState([]);
   const [showLoader, setShowLoader] = useState(false);

   async function fetchFlowers() {
      setShowLoader(true);
      try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
               _limit: 10,
               _page: 1,
            },
         });
         setFlowersArr(normalizeArr(response.data, flowers));
      } catch (e) {
         alert('Error in Flower Gallery component:' + e.message);
      } finally {
         setShowLoader(false);
      }
   }

   useEffect(() => {
      fetchFlowers()
   }, []);

   const settings = {
      dots: true, infinite: false, speed: 500, slidesToShow: 4, slidesToScroll: 4, initialSlide: 0, responsive: [{
         breakpoint: 1024, settings: {
            slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true
         }
      }, {
         breakpoint: 600, settings: {
            slidesToShow: 2, slidesToScroll: 2, initialSlide: 2
         }
      }, {
         breakpoint: 480, settings: {
            slidesToShow: 1, slidesToScroll: 1
         }
      }]
   };
   return (
      <div className={styles.container}>
         <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Flower gallery</h2>
            <a className={styles.showFlowerGallery} href="#">view all</a>
         </div>
         {showLoader ?
            <Loader/>
            :
            <Slider {...settings} className={styles.slider}>
               {flowersArr.map((item) =>
                  <div key={item.id} className={styles.card}>
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
                              <span>Pot color</span>
                              <div className={styles.colors}>
                                 <div className={[styles.color, styles.black].join(' ')}/>
                                 <div className={[styles.color, styles.ocher].join(' ')}/>
                                 <div className={[styles.color, styles.white].join(' ')}/>
                                 <div className={[styles.color, styles.brown].join(' ')}/>
                              </div>
                           </div>
                           <button className={styles.btn}>Byu</button>
                        </div>
                     </div>
                  </div>)}
            </Slider>}
      </div>);
};

export default FlowerGallery;
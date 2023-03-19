import React, {useEffect, useState} from 'react';
import styles from "./FlowerGallery.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";



const FlowerGallery = () => {
   const [flowersArr, setFlowersArr] = useState([]);
   async function fetchFlowers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1');
      setFlowersArr(response.data);
   }
   useEffect( () => {fetchFlowers()}, []);
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };
   return (
      <div className='container'>
         <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Flower gallery</h2>
            <a className={styles.showFlowerGallery} href="#">view all</a>
         </div>
         {!flowersArr.length ?
         <h3>Please hold</h3> :
         <Slider {...settings} className={styles.slider}>
            {
               flowersArr.map((item, index) => (
                  <div key={index} className={styles.card}>
                     <div className={styles.imgWrapper}>
                        <img src={item.url} alt="flower" className={styles.img}/>
                     </div>
                     <div>
                        <div className={styles.cardText}>
                           <span>{item.title.slice(0, 10)}</span>
                           <span>{item.title.length + '$'}</span>
                        </div>
                        <div className={styles.cardBottom}>
                           <div className="potColor">
                              <span>Pot color</span>
                              <div className={styles.colors}>
                                 <div className={[styles.color, styles.black].join(' ')}></div>
                                 <div className={[styles.color, styles.ocher].join(' ')}></div>
                                 <div className={[styles.color, styles.white].join(' ')}></div>
                                 <div className={[styles.color, styles.brown].join(' ')}></div>
                              </div>
                           </div>
                           <button className={styles.btn}>Byu</button>
                        </div>
                     </div>
                  </div>
               ))
            }
         </Slider>}
      </div>
   );
};

export default FlowerGallery;
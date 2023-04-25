import React, {useEffect, useState} from 'react';
import styles from './FlowerGallery.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {flowers} from '../mock';
import Loader from '../UI/Loader/Loader';
import axios from "axios";
import {normalizeArr} from '../Utils/Utils';
import FlowerGalleryCard from './FlowerGalleryCard/FlowerGalleryCard';
import CustomBtn from '../UI/CustomBtn/CustomBtn';
import {NavLink} from 'react-router-dom';


const FlowerGallery = () => {
   const [flowersArr, setFlowersArr] = useState([]);
   const [showLoader, setShowLoader] = useState(false);
   const [total, setTotal] = useState(0);
   const [disabled, setDisabled] = useState(false);

   async function fetchFlowers() {
      setShowLoader(true);
      try {
         if (!flowersArr.length) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 10,
                  _page: 1,
               },
            });
            setFlowersArr(normalizeArr(response.data, flowers));
            setTotal(response.headers['x-total-count']);
         } else {
            const page = Math.ceil(flowersArr.length / 10) + 1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 10,
                  _page: page,
               },
            });

            setFlowersArr(pre => [...pre, ...normalizeArr(response.data, flowers, pre)]);

            if (flowersArr.length >= total && total) setDisabled(true);
         }
      } catch (e) {
         alert('Error in Flower Gallery component:' + e.message);
      } finally {
         setShowLoader(false);
      }
   }

   useEffect(() => {
      fetchFlowers();
   }, []);

   const settings = {
      dots: true, infinite: false, speed: 500, slidesToShow: 4, slidesToScroll: 4, initialSlide: 0, responsive: [{
         breakpoint: 1199, settings: {
            slidesToShow: 4, slidesToScroll: 3, infinite: false, dots: true
         }
      },
         {
            breakpoint: 768, settings: {
               slidesToShow: 3, slidesToScroll: 2, initialSlide: 2
            }
         },
         {
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
      <div className={styles.wrapper} id='flower_gallery'>
         <div className={styles.container}>
            <div className={styles.headerWrapper}>
               <h2 className={styles.header}>Flower gallery</h2>
               <NavLink to="/FlowersPage" className={styles.showFlowerGallery}>view all</NavLink>
            </div>
            <div className={styles.sliderWrapper}>
               {showLoader ?
                  <Loader/>
                  :
                  <Slider {...settings} className={styles.slider}>
                     {flowersArr.map((item) =>
                        <FlowerGalleryCard key={item.id} item={item}/>
                     )}
                  </Slider>}
            </div>
            <div className={styles.loadBtnWrapper}>
               <CustomBtn
                  onClick={fetchFlowers}
                  color={'green'}
                  children={'Load more'}
                  disabled={disabled}/>
            </div>
         </div>
      </div>
   );
};

export default FlowerGallery;
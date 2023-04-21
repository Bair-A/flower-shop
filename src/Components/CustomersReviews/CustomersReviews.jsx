import React, {useEffect, useState} from 'react';
import styles from './CustomersReviews.module.scss';
import {reviews} from '../mock';
import Loader from "../UI/Loader/Loader";
import Slider from "react-slick";
import axios from "axios";
import {normalizeArr} from "../Utils/Utils";
import CustomerReviewCard from "./CustomerReviewCard/CustomerReviewCard";

const settings = {
   dots: true,
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 5000,
   cssEase: 'linear'
};

const CustomersReviews = () => {
   const [showLoader, setShowLoader] = useState(false);
   const [reviewsArr, setReviewsArr] = useState([]);

   async function fetchReviews() {
      setShowLoader(true);
      try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
               _limit: 10,
               _page: 1,
            },
         });
         setReviewsArr(normalizeArr(response.data, reviews));
      } catch (e) {
         alert('Error in customers reviews component:' + e.message);
      } finally {
         setShowLoader(false);
      }
   }

   useEffect(() => {
      fetchReviews()
   }, []);


   return (
      <div className={styles.reviews} id='reviews'>
         <div className={styles.container}>
            <h2 className={styles.title}>Reviews</h2>
            <div className={styles.sliderWrapper}>
               {showLoader ?
                  <Loader/>
                  :
                  <Slider {...settings}>
                     {reviewsArr.map((item) =>
                        <CustomerReviewCard key={item.id} item={item}/>
                     )}
                  </Slider>}
            </div>
         </div>
      </div>);
};

export default CustomersReviews;
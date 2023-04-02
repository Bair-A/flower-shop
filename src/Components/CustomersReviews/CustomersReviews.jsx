import React, {useEffect, useState} from 'react';
import styles from './CustomersReviews.module.scss';
import {reviews} from '../mock';
import Loader from "../UI/Loader";
import Slider from "react-slick";

const settings = {
   dots: true, // infinite: true,
   slidesToShow: 1, slidesToScroll: 1, autoplay: true, speed: 2000, autoplaySpeed: 200000000, cssEase: 'linear'
};

const CustomersReviews = () => {
   const [showLoader, setShowLoader] = useState(false);
   const [reviewsArr, setReviewsArr] = useState([]);

   async function fetchReviews() {
      // I use fake fetch because i couldn't find  suitable API
      try {
         // const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1');
         // setReviewsArr(response.data);
         setShowLoader(true);
         await new Promise(resolve => setTimeout(resolve, 1000));
         setReviewsArr(reviews)
      } catch (e) {
         alert(e.message);
      } finally {
         setShowLoader(false);
      }
   }

   useEffect(() => {
      fetchReviews()
   }, []);


   return (
      <div className={styles.reviews}>
         <div className={styles.container}>
            <h2 className={styles.title}>Reviews</h2>
            {showLoader && <Loader/>}
            {reviewsArr.length && <Slider {...settings}>
               {reviewsArr.map((item) => (
                  <div key={item.id}>
                     <div className={styles.slideContent}>
                        <div className={styles.textContent}>
                           <h3 className={styles.slideHeader}>{item.name}</h3>
                           <p className={styles.slideText}>{item.review}</p>
                           <div className={styles.ratingWrapper}>
                              <div className={styles.rating} data-total-value={item.rating}>
                                 <div className={styles.ratingItem} data-item-value='5'>✿</div>
                                 <div className={styles.ratingItem} data-item-value='4'>✿</div>
                                 <div className={styles.ratingItem} data-item-value='3'>✿</div>
                                 <div className={styles.ratingItem} data-item-value='2'>✿</div>
                                 <div className={styles.ratingItem} data-item-value='1'>✿</div>
                              </div>
                              <span className={styles.date}>{item.date}</span>
                           </div>
                        </div>
                        <div className={styles.imgWrapper}>
                           <img className={styles.img} src={item.img} alt="review image"/>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>}
         </div>
      </div>);
};

export default CustomersReviews;
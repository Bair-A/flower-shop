import React, {useEffect, useState} from 'react';
import styles from './PotsGallery.module.scss';
import {pots} from '../mock';
import Loader from '../UI/Loader';
import {GiVineLeaf} from 'react-icons/gi';
import {normalizeArr} from '../Utils/Utils';
import axios from 'axios';
import PotsGalleryCard from './PotsGalleryCard/PotsGalleryCard';


const PotsGallery = () => {
   const [total, setTotal] = useState(0);
   const [potsArr, setPotsArr] = useState([]);
   const [showLoader, setShowLoader] = useState(false);

   async function fetchProducts() {

      try {
         setShowLoader(true);
         if (!potsArr.length) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 8,
                  _page: 1,
               },
            });
            setPotsArr(normalizeArr(response.data, pots));
            console.log(response.headers['x-total-count\n'])
         } else {
            const page = potsArr.length / 8 + 1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 8,
                  _page: page,
               },
            });
            setPotsArr(pre => [...pre, ...normalizeArr(response.data, pots, pre)]);
         }

      } catch (e) {
         alert('Error in Pots Gallery component:' + e.message)
      } finally {
         setShowLoader(false);
      }
   }

   useEffect(() => {
      fetchProducts()
   }, []);

   return (<div className={styles.wrapper}>
      <div className='container'>
         <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Plant stands</h2>
            <a className={styles.showFlowerGallery} href="#">view all</a>
         </div>
         <div className={styles.cards}>
            {showLoader ?
               <Loader/>
               :
               potsArr.map((item) =>
                  <PotsGalleryCard key={item.id} item={item}/>
               )}
         </div>
         <button
            className={
               // (pots.length <= potsArr.length) ? [styles.loadMoreBtn, styles.disabled].join(' ') : styles.loadMoreBtn
               styles.loadMoreBtn
            }
            onClick={fetchProducts}>
            <GiVineLeaf className={styles.btnDecorationTop}/>
            Load more
            <GiVineLeaf className={styles.btnDecorationBottom}/>
         </button>
      </div>
   </div>);
};

export default PotsGallery;
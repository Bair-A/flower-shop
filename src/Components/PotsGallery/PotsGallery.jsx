import React, {useEffect, useState} from 'react';
import styles from './PotsGallery.module.scss';
import {pots} from '../mock';
import Loader from '../UI/Loader/Loader';
import {normalizeArr} from '../Utils/Utils';
import axios from 'axios';
import PotsGalleryCard from './PotsGalleryCard/PotsGalleryCard';
import CustomBtn from '../UI/CustomBtn/CustomBtn';


const PotsGallery = () => {
   const [total, setTotal] = useState(0);
   const [potsArr, setPotsArr] = useState([]);
   const [showLoader, setShowLoader] = useState(false);
   const [disabled, setDisabled] = useState(false);

   if (potsArr.length >= total && total) setDisabled(true);

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
            setTotal(response.headers['x-total-count'])
         } else {
            const page = Math.ceil(potsArr.length / 8) + 1;
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

   return (
      <div className={styles.wrapper} id='pots_gallery'>
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
            <div className={styles.loadBtnWrapper}>
               <CustomBtn children={'Load more'}
                          onClick={fetchProducts}
                          color={'green'}
                          disabled={disabled}/>
            </div>
         </div>
      </div>);
};

export default PotsGallery;
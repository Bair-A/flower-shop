import React, {useState, useEffect} from 'react';
import styles from './PotsPage.module.scss';
import {pots} from '../../mock';
import Loader from '../../UI/Loader/Loader';
import {normalizeArr} from '../../Utils/Utils';
import axios from 'axios';
import PotsGalleryCard from '../../PotsGallery/PotsGalleryCard/PotsGalleryCard';
import CustomBtn from "../../UI/CustomBtn/CustomBtn";
import {BiCaretLeft} from "react-icons/bi";
import {Link} from "react-router-dom";


const PotsPage = () => {
   const [total, setTotal] = useState(0);
   const [onPage, setOnPage] = useState(8);
   const [potsArr, setPotsArr] = useState([]);
   const [showLoader, setShowLoader] = useState(false);
   const [disabled, setDisabled] = useState(false);
   const [pagination, setPagination] = useState([]);


   async function fetchProducts() {

      try {
         setShowLoader(true);
         if (!potsArr.length) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 10,
                  _page: 1,
               },
            });
            setPotsArr(normalizeArr(response.data, pots));
            setTotal(response.headers['x-total-count'])
         } else {
            const page = Math.ceil(potsArr.length / 10) + 1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 10,
                  _page: page,
               },
            });

            setPotsArr(pre => [...pre, ...normalizeArr(response.data, pots, pre)]);

            if (potsArr.length >= total && total) setDisabled(true)
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
         <div className={styles.container}>
            <div className={styles.inner}>
               <div className={styles.headerWrapper}>
                  <h2 className={styles.header}>Flower pots</h2>
                  <span className={styles.showFlowerGallery}>Total: {total}</span>
               </div>
               <div className={styles.cardsWrapper}>
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
         </div>
      </div>);
};

export default PotsPage;
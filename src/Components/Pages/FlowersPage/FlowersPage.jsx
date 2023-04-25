import React, {useEffect, useState} from 'react';
import styles from './FlowerPage.module.scss'
import {Link} from 'react-router-dom';
import {BiCaretLeft} from "react-icons/bi";
import axios from "axios";
import {normalizeArr} from "../../Utils/Utils";
import {flowers} from "../../mock";
import Loader from '../../UI/Loader/Loader';
import FlowerGalleryCard from "../../FlowerGallery/FlowerGalleryCard/FlowerGalleryCard";
import CustomBtn from "../../UI/CustomBtn/CustomBtn";


const FlowersPage = () => {
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
                  _limit: 9,
                  _page: 1,
               },
            });
            setFlowersArr(normalizeArr(response.data, flowers));
            setTotal(response.headers['x-total-count']);
         } else {
            const page = Math.ceil(flowersArr.length / 9) + 1;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _limit: 9,
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

   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Link to='/' className={styles.btn}><BiCaretLeft/>Back</Link>
            <div className={styles.headerWrapper}>
               <h2 className={styles.header}>Flower pots</h2>
               <span className={styles.showFlowerGallery}>Total: {total}</span>
            </div>
            <div className={styles.cardsWrapper}>
               {showLoader ?
                  <Loader/>
                  :
                  flowersArr.map((item) =>
                     <FlowerGalleryCard key={item.id} item={item}/>
                  )
               }
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

export default FlowersPage;
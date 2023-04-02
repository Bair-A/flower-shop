import React, {useEffect, useState} from 'react';
import styles from "./PotsGallery.module.scss";
import {pots} from "../mock";
import Loader from "../UI/Loader";
import {GiVineLeaf} from "react-icons/gi";

const PotsGallery = () => {
   const [potsArr, setPotsArr] = useState([]);
   const [showLoader, setShowLoader] = useState(false);

   async function fetchProducts() {
      // I use fake fetch because i couldn't find suitable API
      if (potsArr.length >= pots.length) return
      try {
         // const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1');
         // setProductsArr(response.data);
         setShowLoader(true);
         await new Promise(resolve => {
            setTimeout(resolve, 1000);
         });
         setPotsArr(pre => [...pre, ...pots.slice(pre.length, pre.length + 8)]);
      } catch (e) {
         alert(e.message)
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
            {potsArr.length ? potsArr.map((item, index) => (<div key={item.id} className={styles.card}>
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
                        <span>Color</span>
                        <div className={styles.colors}>
                           <div className={[styles.color, styles.black].join(' ')}/>
                           <div className={[styles.color, styles.ocher].join(' ')}/>
                           <div className={[styles.color, styles.white].join(' ')}/>
                           <div className={[styles.color, styles.brown].join(' ')}/>
                        </div>
                     </div>
                     <button className={styles.btn}>Buy</button>
                  </div>
               </div>
            </div>)) : ""}
         </div>
         {
            showLoader ? <Loader/> : ''
         }
         <button
            className={(pots.length <= potsArr.length) ? [styles.loadMoreBtn, styles.disabled].join(' ') : styles.loadMoreBtn}
            onClick={fetchProducts}>
            <GiVineLeaf className={styles.btnDecorationTop}/>
            Shop more
            <GiVineLeaf className={styles.btnDecorationBottom}/>
         </button>
      </div>
   </div>);
};

export default PotsGallery;
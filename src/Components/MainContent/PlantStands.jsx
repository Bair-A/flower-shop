import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./PlantStands.module.scss";


const PlantStands = () => {
   const [productsArr, setProductsArr] = useState([]);

   async function fetchProducts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1');
      setProductsArr(response.data);
      console.log(response.data);
   }

   useEffect(() => {
      fetchProducts()
   }, []);
   return (
      <div className='container'>
         <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Plant stands</h2>
            <a className={styles.showFlowerGallery} href="#">view all</a>
         </div>
         <div className={styles.cards}>
            {!productsArr.length ?
               <h3>Please hold</h3> :
               productsArr.map((item, index) => (
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
                                 {/*<div className={[styles.color, styles.black].join(' ')}></div>*/}
                                 {/*<div className={[styles.color, styles.ocher].join(' ')}></div>*/}
                                 {/*<div className={[styles.color, styles.white].join(' ')}></div>*/}
                                 {/*<div className={[styles.color, styles.brown].join(' ')}></div>*/}
                              </div>
                           </div>
                           <button className={styles.btn}>Byu</button>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default PlantStands;
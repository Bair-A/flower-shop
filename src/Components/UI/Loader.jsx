import React from 'react';
import styles from './Loader.module.scss';
import {GiFlowerEmblem} from "react-icons/gi";

const Loader = () => {
   return (
      <div className={styles.container}>
         {/*<div className={styles.loader}>*/}
         <GiFlowerEmblem className={styles.loader}/>
         {/*</div>*/}
      </div>

   );
};

export default Loader;
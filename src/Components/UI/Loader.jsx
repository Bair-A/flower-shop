import React from 'react';
import styles from './Loader.module.scss';
import {GiFlowerEmblem} from "react-icons/gi";

const Loader = () => {
   return (
      <div className={styles.container}>
         <GiFlowerEmblem className={styles.loader}/>
      </div>
   );
};

export default Loader;
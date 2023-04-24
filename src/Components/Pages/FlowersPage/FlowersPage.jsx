import React from 'react';
import styles from './FlowerPage.module.scss'
import {Link} from 'react-router-dom';

const FlowersPage = () => {
   return (
      <div className={styles.wrapper}>
         <Link to='/' className={styles.btn}>Home</Link>
      </div>
   );
};

export default FlowersPage;
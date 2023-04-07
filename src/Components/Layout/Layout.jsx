import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
   return (
      <div className={styles.wrapper}>
         <div>
            <Header/>
         </div>
         <div className={styles.main}>

         </div>
         <div>
            <Footer/>
         </div>
      </div>
   );
};

export default Layout;
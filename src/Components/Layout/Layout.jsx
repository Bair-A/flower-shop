import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';

const Layout = () => {
   return (
      <div className={styles.wrapper}>
         <div>
            <Header/>
         </div>
         <div>
            <Outlet/>
         </div>
         <div>
            <Footer/>
         </div>
      </div>
   );
};

export default Layout;
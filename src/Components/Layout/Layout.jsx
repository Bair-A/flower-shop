import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';

const Layout = () => {
   return (
      <div className={styles.wrapper}>
         <Header/>
         <Outlet/>
         <Footer/>
      </div>
   );
};

export default Layout;
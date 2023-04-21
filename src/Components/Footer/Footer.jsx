import React from 'react';
import {FiInstagram, FiTwitter, FiSend} from 'react-icons/fi';
import {FaPinterest} from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.social}>
               <a className={styles.socialItem} target='_blank' href="https://www.instagram.com"><FiInstagram/></a>
               <a className={styles.socialItem} target='_blank' href="https://twitter.com/"><FiTwitter/></a>
               <a className={styles.socialItem} target='_blank' href="https://t.me/"><FiSend/></a>
               <a className={styles.socialItem} target='_blank' href="https://pinterest.com/"><FaPinterest/></a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
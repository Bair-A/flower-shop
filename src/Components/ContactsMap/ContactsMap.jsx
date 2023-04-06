import React from 'react';
import styles from './ContactsMap.module.scss';
import {FiPhoneCall, FiMail, FiMapPin} from "react-icons/fi";

const ContactsMap = () => {
   return (
      <div className={styles.contactsMap} id='contacts'>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <div className={styles.contacts}>
                  <h3 className={styles.title}>Free Shipping Services</h3>
                  <p className={styles.subTitle}>*only for the same region</p>
                  <div className={styles.contactsInner}>
                     <a className={styles.phone} href='tel:+1 (xxx) xxx-xxxx'><FiPhoneCall/> +1 (999) 999-999</a>
                     <a className={styles.email} href="mailto:gmail@gmail.com"><FiMail/> gmail@gmail.com</a>
                     <span className={styles.address}><FiMapPin/> 7362S Cooper St</span>
                  </div>
               </div>
               <iframe className={styles.iframe}
                       src="https://www.google.com/maps/d/u/0/embed?mid=1m-CLHYNf3uqJDQ4Cu0x_ADbZhogNzQo&ehbc=2E312F"
               />
            </div>
         </div>
      </div>
   )
      ;
};

export default ContactsMap;
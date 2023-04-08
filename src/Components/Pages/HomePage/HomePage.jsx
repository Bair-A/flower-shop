import React from 'react';
import FrontPage from '../../FrontPage/FrontPage';
import FlowerGallery from '../../FlowerGallery/FlowerGallery';
import PotsGallery from '../../PotsGallery/PotsGallery';
import CustomersReviews from '../../CustomersReviews/CustomersReviews';
import ContactsMap from '../../ContactsMap/ContactsMap';


const HomePage = () => {
   return (
      <div>
         <FrontPage/>
         <FlowerGallery/>
         <PotsGallery/>
         {/*<CustomersReviews/>*/}
         <ContactsMap/>
      </div>
   );
};

export default HomePage;
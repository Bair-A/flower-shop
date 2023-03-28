import React from 'react';
import Header from './Header';
import HomePageContent from './HomePageContent';

const HomePage = () => {
   return (
      <div className='main'>
         <div className="container">
            <Header/>
            <HomePageContent/>
         </div>
      </div>
   );
};

export default HomePage;
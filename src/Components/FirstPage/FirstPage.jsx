import React from 'react';
import Header from './Header';
import FirstPageContent from './FirstPageContent';

const FirstPage = () => {
   return (
      <div className='main'>
         <div className="container">
            <Header/>
            <FirstPageContent/>
         </div>
      </div>
   );
};

export default FirstPage;
import './App.scss';
import FrontPage from './Components/FrontPage/FrontPage';
import FlowerGallery from './Components/FlowerGallery/FlowerGallery';
import PotsGallery from './Components/PotsGallery/PotsGallery';
import Header from './Components/Header/Header';
import CustomersReviews from './Components/CustomersReviews/CustomersReviews';
import ContactsMap from './Components/ContactsMap/ContactsMap';
import Footer from './Components/Footer/Footer';


function App() {
   return (
      <div className="App">
         <Header/>
         <FrontPage/>
         <FlowerGallery/>
         <PotsGallery/>
         <CustomersReviews/>
         <ContactsMap/>
         <Footer/>
      </div>
   );
}

export default App;

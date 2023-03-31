import './App.scss';
import HomePage from './Components/HomePage/HomePage';
import FlowerGallery from './Components/FlowerGallery/FlowerGallery';
import PotsGallery from './Components/PotsGallery/PotsGallery';
import Header from './Components/Header/Header';
import Contacts from './Components/Contacts/Contacts';
import CustomersReviews from "./Components/CustomersReviews/CustomersReviews";

function App() {
   return (
      <div className="App">
         <Header/>
         <HomePage/>
         <FlowerGallery/>
         <PotsGallery/>
         <CustomersReviews/>
      </div>
   );
}

export default App;

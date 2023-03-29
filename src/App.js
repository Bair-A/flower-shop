import './App.scss';
import HomePage from './Components/HomePage/HomePage';
import FlowerGallery from './Components/FlowerGallery/FlowerGallery';
import PlantStands from './Components/PlantStands/PlantStands';
import Header from './Components/Header/Header';


function App() {
   return (
      <div className="App">
         <Header/>
         <HomePage/>
         <FlowerGallery/>
         <PlantStands/>
      </div>
   );
}

export default App;

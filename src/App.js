import './App.scss';
import HomePage from './Components/HomePage/HomePage';
import FlowerGallery from './Components/MainContent/FlowerGallery';
import PlantStands from './Components/MainContent/PlantStands'


function App() {
   return (
      <div className="App">
         <HomePage/>
         <FlowerGallery/>
         <PlantStands/>
      </div>
   );
}

export default App;

import './App.scss';
import FirstPage from './Components/FirstPage/FirstPage';
import FlowerGallery from './Components/MainContent/FlowerGallery';
import PlantStands from './Components/MainContent/PlantStands'



function App() {
  return (
    <div className="App">
      <FirstPage/>
      <FlowerGallery/>
      <PlantStands/>
    </div>
  );
}

export default App;

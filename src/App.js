import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/Pages/HomePage/HomePage';
import FlowersPage from './Components/Pages/FlowersPage/FlowersPage';
import PotsPage from './Components/Pages/PotsPage/PotsPage';
import PersonalPage from './Components/Pages/PersonalPage/PersonalPage';
import BasketPage from './Components/Pages/BasketPage/BasketPage';
import SearchPage from './Components/Pages/SearchPage/SearchPage';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<HomePage/>}/>
               <Route path='/FlowersPage' element={<FlowersPage/>}/>
               <Route path='/PotsPage' element={<PotsPage/>}/>
               <Route path='/PersonalPage' element={<PersonalPage/>}/>
               <Route path='/BasketPage' element={<BasketPage/>}/>
               <Route path='/SearchPage' element={<SearchPage/>}/>
            </Route>
         </Routes>
      </div>
   );
}

export default App;

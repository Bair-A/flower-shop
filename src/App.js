import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/Pages/HomePage/HomePage';
import FlowersPage from './Components/Pages/FlowersPage/FlowersPage';
import PotsPage from './Components/Pages/PotsPage/PotsPage';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<HomePage/>}/>
               <Route path='/FlowersPage' element={<FlowersPage/>}/>
               <Route path='/PotsPage' element={<PotsPage/>}/>
            </Route>
         </Routes>
      </div>
   );
}

export default App;

import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import Maps from './components/Maps'
import Feeling from './survey/Feeling';
import Drinky from './survey/Drinky'; 
import Deeper from './survey/FeelingDeeper';
<<<<<<< Updated upstream
import Player from './components/Player'
=======
import Result from "./result";

>>>>>>> Stashed changes


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/training' element={<Maps/>}/>
      <Route path='/contact' element={<Feeling/>}/>
      <Route path='/drinky' element={<Drinky/>}/>
      <Route path='/deeper' element={<Deeper/>}/>
      <Route path='/player' element={<Player/>}/>
      <Route path='/results' element={<Result/>}/>
    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;

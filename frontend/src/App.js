import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import Maps from './components/Maps'
import Feeling from './survey/Feeling';



function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/map' element={<Maps/>}/>
      <Route path='/what' element={<Feeling/>}/>
    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;

import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import Maps from './components/Maps'



function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/training' element={<Maps/>}/>
      </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;

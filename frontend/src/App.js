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
<<<<<<< HEAD
      <Route path='/map' element={<Maps/>}/>
      <Route path='/what' element={<Feeling/>}/>
    </Routes>
=======
      <Route path='/training' element={<Maps/>}/>
      </Routes>
>>>>>>> b16a6212a2409764bfca013b56f7b5a83c350560
    
    
    </BrowserRouter>
   
  );
}

export default App;

import React from "react";
import Index from "./Pages/Index";
import Login from "./Pages/login";
import SignUp from "./Pages/signup";
import Clublist from "./Pages/clublist";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
       <Route path='*' element={<Index />} />
       <Route path='/login' element={<Login/>} />
       <Route path='/signup' element={<SignUp/>} />
       <Route path='/Clublist' element={<Clublist/>} />
    </Routes>
     );
}

export default App;

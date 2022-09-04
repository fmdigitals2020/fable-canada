import React from "react";
import Index from "./Pages/Index";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
       <Route path='*' element={<Index />} />
    </Routes>
     );
}

export default App;

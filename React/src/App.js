//lesson 1

import './App.css';
import Welcome from  './lesson_1/components/comp_1';

// function App() {
//   return(
//     <Welcome></Welcome>
//   )
// }

//lesson 3
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactUs from './lesson_3/components/ContactUs';
import Thank_you from './lesson_3/components/Thank_you';

  const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ContactUs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ContactUs />}/>
        <Route path="/thank" element={<Thank_you />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

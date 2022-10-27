
import React from 'react';
import '../src/Assets/App.css';
import NavBar from './Layout/NavBar';
import ItemlistContainer from './Components/itemListContainer';
import Footer from './Layout/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/itemDetailContainer.js';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemlistContainer/>} />
      <Route path="/categoria/:categoria" element={<ItemlistContainer/>} />
      <Route path="/:categoria/:libroID" element={<ItemDetailContainer/>} />

      
      </Routes>


    </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
import React from 'react'
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Header from './components/header'
import Avatar from './components/Avatardropdown';
import Clubs from './pages/clubs';

function App() {

    return (
      <div>
        
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path= "/Home" element={<Home />} />
            <Route path= "/Login" element={<Login />} />
            <Route path= "/Signup" element={<Signup />} />
            <Route path= "/clubs" element={<Clubs />} />
  
          </Routes>
        </BrowserRouter>
      </div>
      
    );
}

export default App

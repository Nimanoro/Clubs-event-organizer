import React from 'react'
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Header from './components/header'

function App() {
  const [data, setData] = useState('')

  // [] tells it to run only onece when rendered
  // useEffect(() => {
  //   fetch('/sayHi')
  //     .then(
  //       res => res.json()
  //       )
  //     .then(data => setData(data))
  // }, []); 

  // return (
  //   <div>
  //     {data ? <h1>{data.message}</h1> : 'Loading...'}
  //   </div>
  // )

    return (
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path= "/Home" element={<Home />} />
            <Route path= "/Login" element={<Login />} />
            <Route path= "/Signup" element={<Signup />} />
  
          </Routes>
        </BrowserRouter>
      </div>
      
    );
}

export default App

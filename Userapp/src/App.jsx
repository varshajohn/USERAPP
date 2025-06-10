import React from 'react'
import './App.css'
import Add from './Compononts/Add'
import View from './Compononts/View'
import Navbar from './Compononts/Navbar'
import Home from './Compononts/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/add" element={<Add person={{ userid: "E201", name: "Joy", email: 'joy@gmail.com' }} />} />
     <Route path="/view" element={<View />} />
   </Routes>
    </>
  )
}

export default App
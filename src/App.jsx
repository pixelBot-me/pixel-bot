import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </>
  )
}

export default App

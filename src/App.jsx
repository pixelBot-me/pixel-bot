import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';
import GraphicDesign from './pages/courses/GraphicDesign';
import UiUxDesign from './pages/courses/UiUxDesign';
import WebDesihn from './pages/courses/WebDesihn';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import MotionGraphics from './pages/courses/MotionGraphics';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/web-design" element={<WebDesihn />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/motion-graphics" element={<MotionGraphics />} />
      </Routes>
    </>
  )
}

export default App

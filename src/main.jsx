import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'


ReactDOM.render(
  <BrowserRouter>
   <Header />
      <App />
      <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Header />
//       <App />
//     <Footer />
//   </StrictMode>


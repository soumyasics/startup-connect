import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageTopNav/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";
import Footer from "./components/Footer/Footer";
import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageTopNav/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/ent-loginpagemain" element={<LoginPageMain/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";
// import Footer from "./components/Footer/Footer";
import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain";
import Footer from "./components/Footer/Footer";
import ForgotPassMain from "./Entreprenuer/ForgotPass/ForgotPassMain";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageTopNav/>}/>

      <Route path="/footer" element={<Footer/>}/>
      <Route path="/ent-loginpagemain" element={<LoginPageMain/>} />
   <Route path="/ent-loginpagemain" element={<LoginPageMain/>} />
   <Route path="/ent-forgotpassmain" element={<ForgotPassMain/>}/>

      <Route path="/footer" element={<Footer/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

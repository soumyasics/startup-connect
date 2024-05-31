import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";

import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain";
import ForgotPassMain from "./Entreprenuer/ForgotPass/ForgotPassMain";



import Entsignup from "./Entreprenuer/Signup/Entsignup";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={[<LandingPageTopNav/>,<Footer/>]}/>
   <Route path="/entsignup" element={<Entsignup/>}/>
   <Route path="/ent-loginpagemain" element={<LoginPageMain/>} />
   <Route path="/ent-forgotpassmain" element={<ForgotPassMain/>}/>



    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";

import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain";
import Footer from "./components/Footer/Footer";
import Entsignup from "./Entreprenuer/LoginPage/Signup/Entsignup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={[<LandingPageTopNav/>,<Footer/>]}/>
   <Route path="/ent-loginpagemain" element={[<LoginPageMain/>,<Footer/>]} />
   <Route path="/entsignup" element={<Entsignup/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;

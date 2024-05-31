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
    <BrowserRouter >
      <Routes>
        <Route path="/" element={[<LandingPageTopNav />, <Footer />]} />
        <Route path="/entrepreneur/signup" element={<Entsignup />} />
        <Route path="/entrepreneur/login" element={<LoginPageMain />} />
        <Route
          path="/entrepreneur/fogot-password"
          element={<ForgotPassMain />}
        />

        <Route path="/*" element={<h1> 404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

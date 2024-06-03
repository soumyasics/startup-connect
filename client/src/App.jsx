import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";

import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain"
import ForgotPassMain  from "./Entreprenuer/ForgotPass/ForgotPassMain"
import Footer from "./Components/Footer/Footer"

import Entsignup from "./Entreprenuer/Signup/Entsignup"

{
  /* Invester */
}

import InvesterRegister from "./Components/Invester/InvesterRegister"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entreprenuer */}
        <Route path="/ent-loginpagemain" element={<LoginPageMain />} />
        <Route path="/ent-forgotpassmain" element={<ForgotPassMain />} />
        <Route path="/" element={[<LandingPageTopNav />, <Footer />]} />
        <Route path="/entsignup" element={<Entsignup />} />

        {/* Invester */}
        <Route path="inv-register" element={<InvesterRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

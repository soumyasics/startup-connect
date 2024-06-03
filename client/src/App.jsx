import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";

import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain"
import ForgotPassMain  from "./Entreprenuer/ForgotPass/ForgotPassMain"
import Entsignup from "./Entreprenuer/Signup/Entsignup";

import { CommonNavbar } from "./components/commonNavbar/commonNavbar";

import InvesterRegister from "./components/Invester/InvesterRegister";
import Enthomepage from "./Entreprenuer/Homepage/Enthomepage";

function App() {
  return (
    <BrowserRouter basename="strartup">
      <Routes>
        <Route path="/" element={<LandingPageTopNav />} />
        <Route path="/entrepreneur/signup" element={<Entsignup />} />
        <Route path="/entrepreneur/login" element={<LoginPageMain />} />
        <Route
          path="/entrepreneur/fogot-password"
          element={<ForgotPassMain />}
        />

        {/* Invester */}
        <Route path="investor/signup" element={<InvesterRegister />} />

        {/* common pages  */}
        <Route path="navbar" element={<CommonNavbar />} />
        <Route path="/*" element={<h1> 404 Page Not Found</h1>} />

        <Route path="/Enthomepage"element={<Enthomepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

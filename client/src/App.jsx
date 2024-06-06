import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PitchMyIdea from "./Entreprenuer/Pitch_My_Idea/PitchMyIdea";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";

import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain"
import ForgotPassMain  from "./Entreprenuer/ForgotPass/ForgotPassMain"
import Entsignup from "./Entreprenuer/Signup/Entsignup";

import { CommonNavbar } from "./components/commonNavbar/commonNavbar";

import InvesterRegister from "./components/Invester/InvesterRegister";

function App() {
  return (
    <BrowserRouter basename="strartup">
      <Routes>
     <Route path="/" element={<LandingPageTopNav />} />
        <Route path="/entrepreneur/signup" element={<Entsignup />} /> 
        <Route path="/entrepreneur/login" element={<LoginPageMain />} />
        <Route path="/entrepreneur/fogot-password"element={<ForgotPassMain />}/>
        <Route path="/entrepreneur/pitch-my-idea"element={[<CommonNavbar/>,<PitchMyIdea />]}/>
        
        
        <Route path="/investor/signup" element={<InvesterRegister/>}/>


   

       
         <Route path="navbar" element={<CommonNavbar />} />
        <Route path="/*" element={<h1> 404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

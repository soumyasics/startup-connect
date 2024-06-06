import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Entsignup from "./Entreprenuer/Signup/Entsignup";
import PitchMyIdea from "./Entreprenuer/Pitch_My_Idea/PitchMyIdea";
import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain"

import MentorRegister from "./components/Mentor/Signup/MentorRegister";
import MentorLogin from "./components/Mentor/Login/MentorLogin";

import LandingPageTopNav from "./LandingPage/LandingPageTopNav";
import ForgotPassMain  from "./Entreprenuer/ForgotPass/ForgotPassMain"
import { CommonNavbar } from "./components/commonNavbar/commonNavbar";

import InvesterRegister from "./components/Invester/Signup/InvesterRegister";

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

        <Route path="/mentor/signup" element={<MentorRegister/>}/>
        <Route path="/mentor/login" element={<MentorLogin/>}/>


   

       
         <Route path="navbar" element={<CommonNavbar />} />
        <Route path="/*" element={<h1> 404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

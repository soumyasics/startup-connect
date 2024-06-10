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
import InvestorLogin from "./components/Invester/Login/InvestorLogin";
import Navbar_2 from "./components/commonNavbar/Navbar_2";

function App() {
  return (
    <BrowserRouter basename="strartup">
      <Routes>
     <Route path="/" element={<LandingPageTopNav />} />
        <Route path="/entrepreneur/signup" element={[<CommonNavbar/>,<Entsignup />]} /> 
        <Route path="/entrepreneur/login" element={[<CommonNavbar/>,<LoginPageMain />]} />
        <Route path="/entrepreneur/fogot-password"element={[<CommonNavbar/>,<ForgotPassMain />]}/>
        <Route path="/entrepreneur/pitch-my-idea"element={[<CommonNavbar/>,<PitchMyIdea />]}/>
        
        
        <Route path="/investor/signup" element={[<CommonNavbar/>,<InvesterRegister/>]}/>
        <Route path="/investor/login" element={[<CommonNavbar/>,<InvestorLogin/>]}/>

        <Route path="/mentor/signup" element={[<CommonNavbar/>,<MentorRegister/>]}/>
        <Route path="/mentor/login" element={[<CommonNavbar/>,<MentorLogin/>]}/>


   

       
         <Route path="commonnavbar" element={<CommonNavbar />} />
         <Route path="/navbar2" element={<Navbar_2/>} />


        <Route path="/*" element={<h1> 404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

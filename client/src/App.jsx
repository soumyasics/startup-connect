import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Entsignup from "./Entreprenuer/Signup/Entsignup";
import PitchMyIdea from "./Entreprenuer/Pitch_My_Idea/PitchMyIdea";
import ViewStartUpPlan from "./Entreprenuer/ViewStartUpPlan/ViewStartUpPlan";
import LoginPageMain from "./Entreprenuer/LoginPage/LoginPageMain"
import Enthomepage from "./Entreprenuer/Homepage/Enthomepage"
import Entprofile from "./Entreprenuer/Profile/Entprofile"
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";
import ForgotPassMain  from "./Entreprenuer/ForgotPass/ForgotPassMain"
import ViewInvestors from"./Entreprenuer/ViewInvestors/ViewInvestors";

import MentorRegister from "./components/Mentor/Signup/MentorRegister";
import MentorLogin from "./components/Mentor/Login/MentorLogin";

import InvesterRegister from "./components/Invester/Signup/InvesterRegister";
import InvestorLogin from "./components/Invester/Login/InvestorLogin";

import { CommonNavbar } from "./components/commonNavbar/commonNavbar";
import Navbar_2 from "./components/commonNavbar/Navbar_2";
import HomepageNavbar from "./components/commonNavbar/HomepageNavbar"
import AboutUs from "./LandingPage/AboutUs/AboutUs";
import Services from "./LandingPage/Services/Services";
import RequestInvestor from "./Entreprenuer/RequestInvestor/RequestInvestor";
import InvestorReqView from "./Entreprenuer/InvestorReqView/InvestorReqView";
import InvestorsView from "./Entreprenuer/InvestorsView/InvestorsView";
import EditStartUpPlan from "./Entreprenuer/EditStartUpPlan/EditStartUpPlan";
import InvestorUpdateProfile from "./components/Invester/Profile/InvestorUpdateProfile";
import AdminNavbar from "./components/Admin/AdminNavbar";
import AdminDashbord from "./components/Admin/AdminDashbord";
import AdminLogin from "./components/Admin/AdminLogin";
import Adminforgot from "./components/Admin/Adminforgot";
import RecentInvestorList from "./components/Admin/Investor/RecentInvestorList";
import InvestorAccept from "./components/Admin/Investor/InvestorAccept";
import InvestorList from "./components/Admin/Investor/InvestorList";
import InvestorView from "./components/Admin/Investor/InvestorView";
import RecentMentorList from "./components/Admin/Mentor/RecentMentorList";
import MentorAccept from "./components/Admin/Mentor/MentorAccept";
import MentorList from "./components/Admin/Mentor/MentorList";
import MentorView from "./components/Admin/Mentor/MentorView";




function App() {
  return (
    <BrowserRouter basename="strartup">
      <Routes>
        <Route path="/" element={<LandingPageTopNav />} />
        <Route path="/entrepreneur/signup" element={[<CommonNavbar/>,<Entsignup />]} /> 
        <Route path="/entrepreneur/login" element={[<CommonNavbar/>,<LoginPageMain />]} />
        <Route path="/entrepreneur/fogot-password"element={[<CommonNavbar/>,<ForgotPassMain />]}/>
        <Route path="/entrepreneur/pitch-my-idea"element={[<CommonNavbar/>,<PitchMyIdea />]}/>
        <Route path="/entrepreneur/viewstartup_plan"element={<ViewStartUpPlan/>}/>
        <Route path="/entrepreneur/editstartup_plan/:id"element={<EditStartUpPlan/>}/>
        <Route path="/entrepreneur/enthomepage"element={<Enthomepage/>} />
        <Route path='/entrepreneur/entprofile'element={<Entprofile/>}/>
        <Route path='/entrepreneur/viewinvestor' element={<ViewInvestors/>}/>
        <Route path='/entrepreneur/investorsview/:id' element={<InvestorsView/>}/>
        <Route path='/entrepreneur/requestinvestor' element={<RequestInvestor/>}/>
        <Route path='/entrepreneur/investorreqview/:id' element={<InvestorReqView/>}/>

        



        
        <Route path="/investor/signup" element={[<CommonNavbar/>,<InvesterRegister/>]}/>
        <Route path="/investor/login" element={[<CommonNavbar/>,<InvestorLogin/>]}/>
        <Route path="/investor/updateprofile" element={<InvestorUpdateProfile/>}/>


        <Route path="/mentor/signup" element={[<CommonNavbar/>,<MentorRegister/>]}/>
        <Route path="/mentor/login" element={[<CommonNavbar/>,<MentorLogin/>]}/>


   

       
         <Route path="commonnavbar" element={<CommonNavbar />} />
         <Route path="/navbar2" element={<Navbar_2/>} />
         <Route path="/home_navbar" element={<HomepageNavbar/>}/>
         <Route path="/aboutus" element={<AboutUs/>}/>
         <Route path="/services" element={<Services/>}/>




        
         <Route path="/admin_dashboard" element={[<AdminNavbar/>,<AdminDashbord/>]}/>
         <Route path="/admin_login" element={<AdminLogin/>}/>
         <Route path="/admin_forgot" element={<Adminforgot/>}/>
         <Route path="/admin_dashboard/recent_investorlist" element={<RecentInvestorList/>}/>
         <Route path="/admin_dashboard/recent_mentorlist" element={<RecentMentorList/>}/>
         <Route path="/admin_dashboard/investor_accept/:id" element={<InvestorAccept/>}/>
         <Route path="/admin_dashboard/mentor_accept/:id" element={<MentorAccept/>}/>
         <Route path="/admin_dashboard/investorlist" element={<InvestorList/>}/>
         <Route path="/admin_dashboard/mentorlist" element={<MentorList/>}/>
         <Route path="/admin_dashboard/viewinvestor/:id" element={<InvestorView/>}/>
         <Route path="/admin_dashboard/viewmentor/:id" element={<MentorView/>}/>

        

        <Route path="/*" element={<h1> 404 Page Not Found</h1>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../assets/Frame 40.png";
import './HomepageNavbar.css'

function homepgNavbar() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };
    const navigateToInvestors = () => {
        navigate("/investor/login");
    };
    const navigateToMentors = () => {
        navigate("/mentor/login");
    };
    const navigateToStartUpPlan = () => {
        navigate("/entrepreneur/pitch-my-idea");
    };
    const navigateToMyProfile = () => {
        navigate("/entrepreneur/entprofile");
    };
    const navigateToLogin = () => {
        navigate("/entrepreneur/login");
    };
  return (
    <>
        <div className="home_nav_sticky">
        <div className="home_navbar_white">
                <Navbar className="px-4">
                        <Navbar.Brand href="#home" className="text-light">
                            <img src={Frame} className="home_nav_startup_logo" alt="StartupLogo" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="px-3" onClick={navigateToHome}>
                            <a href="#Home" className="text-decoration-none" ><p className="navbarstext">Home</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToInvestors}>
                            <a href="#Investors" className="text-decoration-none" ><p className="navbarstext">Investors</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToMentors}>
                            <a href="#Mentors" className="text-decoration-none" ><p className="navbarstext">Mentors</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToStartUpPlan}>
                            <a href="#StartUpPlan" className="text-decoration-none" ><p className="navbarstext">Startup Plan</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToMyProfile}>
                            <a href="#MyProfile" className="text-decoration-none" ><p className="navbarstext">My Profile</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToLogin}>
                            <a href="#Login" className="text-decoration-none" ><p className="navbarstext">Logout</p></a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>
            
        </div>
    </div>
    </>
  )
}

export default homepgNavbar
import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../assets/Frame 40.png";
import './HomepageNavbar.css'
import { Link } from 'react-router-dom';

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

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
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
                            <Link href="#Home" className="text-decoration-none" ><p className="navbarstext">Home</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToInvestors}>
                            <Link href="#Investors" className="text-decoration-none" ><p className="navbarstext">Investors</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToMentors}>
                            <Link href="#Mentors" className="text-decoration-none" ><p className="navbarstext">Mentors</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToStartUpPlan}>
                            <Link href="#StartUpPlan" className="text-decoration-none" ><p className="navbarstext">Startup Plan</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToMyProfile}>
                            <Link href="#MyProfile" className="text-decoration-none" ><p className="navbarstext">My Profile</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3">
                            <Link href="#Login" className="text-decoration-none" to={'/'} onClick={handleLogout} ><p className="navbarstext">Logout</p></Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>
            
        </div>
    </div>
    </>
  )
}

export default homepgNavbar
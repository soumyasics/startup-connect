import React from 'react'
import './MentorNav.css'
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../../assets/Frame 40.png";
import { Link } from 'react-router-dom';


function MentorNav() {

  const navigate=useNavigate();

  const navigateTohome=()=>{
    navigate("/mentor/homepage")
  }

  const navigateToAddBlogs=()=>{
    navigate("/mentor/addblogs")
  }
  const navigateToAddTutorials=()=>{
    navigate("/mentor/addtutorials")
  }

  return (
    <>
        <div className="men_home_nav_sticky">
        <div className="men_home_navbar_white">
                <Navbar className="px-4">
                        <Navbar.Brand href="#home" className="text-light">
                            <img src={Frame} className="men_home_nav_startup_logo" alt="StartupLogo" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="px-3"  onClick={navigateTohome}>
                            <Link href="#Home" className="text-decoration-none" ><p className="navbarstext">Home</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3"  >
                            <Link href="#Investors" className="text-decoration-none" ><p className="navbarstext">Subscriptions</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToAddTutorials} >
                            <Link href="#Mentors" className="text-decoration-none"  ><p className="navbarstext">Tutorials</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" >
                            <Link href="#Mentors" className="text-decoration-none" ><p className="navbarstext">Chat</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToAddBlogs}  >
                            <Link href="#MyProfile" className="text-decoration-none" ><p className="navbarstext">Blogs</p></Link>
                            </Navbar.Text>
                            <Navbar.Text className="px-3">
                            <Link href="#Login" className="text-decoration-none"   ><p className="navbarstext">Account Settings</p></Link>
                            </Navbar.Text>
                            
                        </Navbar.Collapse>
                </Navbar>
            
        </div>
    </div>
    </>
  )
}

export default MentorNav
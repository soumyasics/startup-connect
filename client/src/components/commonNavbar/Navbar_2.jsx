import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../assets/Frame 40.png";
import { useNavigate } from "react-router-dom";
import './Navbar_2.css'


function Navbar_2() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
    navigate("/investor/login");
  };
  return (
    <>
    <div className="nav_sticky">
        <div className="nav_topheader">
          <div className="nav_secondheader">
            <Navbar className="px-4">
              <Navbar.Brand href="#home" className="text-light">
                <img className='nav_img' src={Frame} alt="Frame" />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="px-5">
                  <a href="#Home" className="text-decoration-none">
                    <p className="navbarstext">Home</p>
                  </a>
                </Navbar.Text>
                <Navbar.Text className="px-5">
                  <a href="#About" className="text-decoration-none">
                    <p className="navbarstext">About Us</p>
                  </a>
                </Navbar.Text>
                <Navbar.Text className="px-5">
                  <a href="#Services" className="text-decoration-none">
                    <p className="navbarstext">Services</p>
                  </a>
                </Navbar.Text>
                <Navbar.Text className="px-5" onClick={navigateToLogin}>
                  <a href='' className="text-decoration-none"><p className="navbarstext">Sign In</p></a>    
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar_2
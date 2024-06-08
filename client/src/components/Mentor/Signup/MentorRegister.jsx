import React, { useState } from 'react'
import './MentorRegister.css'
import MentorRegImg from '../../../assets/mentor_register_img.png'
import Footer from '../../Footer/Footer'
import Frame from "../../../assets/Frame 40.png";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";




function MentorRegister() {

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/mentor/login");
  };
  return (
    <>

<div className="sticky">
        <div className="landingtopheader">
          <div className="landingsecondheader">
            <Navbar className="px-4">
              <Navbar.Brand href="#home" className="text-light">
                <img src={Frame} alt="Frame" />
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
                  <a href='' className="text-decoration-none"><p className="navbarstext">Sign Up</p></a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
        <div className='container mb-5'>
        <div className="text-center headr">
            <h4 className="  mt-3  mentor_mainheading">MENTOR REGISTRATION</h4>
            <h3 className="mentor_sub_h3">Access Your World </h3>
            <h3 className="mentor_sub_h3">of Innovation</h3>
            <hr
              className="  mb-4 border border-3 border-info"
              style={{ margin: "0 45%" }}
            ></hr>
        </div>
        <div className='row'>
          <div className='col'>
          <img className=' mentor_reg_img' src={MentorRegImg}></img>

          </div>
          
          <div className='col'>
            <div class="">
            <label id="">Name</label>
              <input class="input-cal input-base" name="name" id="mentor_input" placeholder="" type="text"/>
            </div>
            
              <div class="pt-2 inv-reg-email">
              <label id="">E-mail ID</label>
                <input class="input-cal input-base" id="mentor_input" name="email" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Contact Number</label>
                <input class="input-cal input-base" id="mentor_input" name="contact" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Username</label>
                <input class="input-cal input-base" id="mentor_input" name="organization" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Password</label>
                <input class="input-cal input-base" id="mentor_input" name="password" placeholder="" type="text"/>
              </div>
              <div class=" pt-2">
              <label id="">Confirm Password</label>
                <input class="input-cal input-base" id="mentor_input" name="confirm_password" placeholder="" type="text"/>
              </div>
            </div>
            <div className='col'>
              <div class="">
              <label id="">Expertise Area</label>
                <select class="input-cal input-base " id="mentor_input"  name="industry_sector">
                  <option hidden="">Expertise Area</option>
                  <option value="Abc">Abc</option>
                  <option value="Def">Def</option>
                  <option value="Ghi">Ghi</option>
                </select>
                
              </div>
              <div class=" pt-2">
              <label id="">Description</label>
                <input class="input-cal input-base" id="mentor_input" name="description" placeholder="" type="text"/>
              </div>
              <div class=" pt-2">
              <label id="">Subscription Amount</label>
                <input class="input-cal input-base" id="mentor_input" name="address" placeholder="" type="text"/>
              </div>
              <div class=" pt-2">
              <label id="">Demo Video Link</label>
                <input class="input-cal input-base" id="mentor_input" name="address" placeholder="" type="text"/>
              </div>
              <div class="men_file_upload1">
              <label className='pt-3 px-1' id="">Profile</label>
              <label for="file" class="men_reg_file_upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="profile" />
                </label>
                
              </div>
              <div class="relative pt-2">
              <button className='mentor_reg_btn'>Register</button> 
              </div>
            </div>
          </div>
          

      </div>
    <Footer/>
    </>
  )
}

export default MentorRegister
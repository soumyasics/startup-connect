import React, { useState } from 'react'
import './InvesterRegister.css'
import InvestorRegImg from '../../../assets/investor_register.png'
import Footer from '../../Footer/Footer'
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../../assets/Frame 40.png";
import { useNavigate } from "react-router-dom";


function InvesterRegister() {
const [prof,SetProf]=useState({profie:"Profile"})
const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  console.log(fileName);

const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
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
                  <p className="navbarstext">Sign Up</p>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    <div className='container'>
    <div className="text-center headr">
          <h4 className="  mt-3  ent_mainheading">REGISTER NOW</h4>
          <h3 className="ent_sub_h3">Access Your World </h3>
          <h3 className="ent_sub_h3">of Innovation</h3>
          <hr
            className="mb-4 border border-3 border-info"
            style={{ margin: "0 45%" }}
          ></hr>
      </div>
      
        <div className='row'>
          <div className='col'>
          <img className="inv-reg-img" src={InvestorRegImg}></img>
          </div>
          <div className='col'>
            <div class="">
            <label id="">Name</label>
              <input class="input-cal input-base" name="name" id="input" placeholder="" type="text"/>
            </div>
            
              <div class="   pt-2 inv-reg-email">
              <label id="">E-mail ID</label>
                <input class="input-cal input-base" id="input" name="email" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Contact Number</label>
                <input class="input-cal input-base" id="input" name="contact" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Organization</label>
                <input class="input-cal input-base" id="input" name="organization" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Nationality</label>
                <input class="input-cal input-base" id="input" name="nationality" placeholder="" type="text"/>
              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Password</label>
                <input class="input-cal input-base" id="input" name="password" placeholder="" type="text"/>
              </div>
              <div class=" pt-2">
              <label id="">Confirm Password</label>
                <input class="input-cal input-base" id="input" name="confirm_password" placeholder="" type="text"/>
              </div>
              
            
            </div>
            <div className='col mb-5'>
              <div class="">
              <label id="">Industry Sector</label>
                <select class="input-cal input-base " id="input"  name="industry_sector">
                  <option hidden="">Industry Sector</option>
                  <option value="Abc">Abc</option>
                  <option value="Def">Def</option>
                  <option value="Ghi">Ghi</option>
                </select>
                
              </div>
              <div class=" pt-2">
                <label id="">Occupation</label>
                  <input class="input-cal input-base" id="input" name="occupation" placeholder="" type="text"/>
                </div>
              <div class=" pt-2">
                <label id="">Description</label>
                  <input class="input-cal input-base" id="input" name="description" placeholder="" type="text"/>
                </div>
              <div class=" pt-2">
                <label id="">Address</label>
                  <input class="input-cal input-base" id="input" name="address" placeholder="" type="text"/>
                </div>
              <div className='inv_file_upload1'>
                <label className='pt-3 px-1'>Profile</label>
                  <label for="file" class="int_reg_file_upload">
                    <div class="icon">Upload</div>
                    <input id="file" type="file"  name="profile" />
                  </label>
              </div>
            <div className='inv_file_upload2'>
            <label className='pt-3 px-1' placeholder=''>Upload Identification Document</label>
            <label for="file" class="int_reg_file_upload">
                <div class="icon">Upload</div>
                <input id=""  type="file"  name="profile"  />
              </label>
            
            </div>
              <div class="relative pt-4">
              <button className='inv-reg-btn'>Register</button> 
              </div>
            </div>
            
          </div>

          
          

      </div>
    <Footer/>
      </> 

  )
}

export default InvesterRegister
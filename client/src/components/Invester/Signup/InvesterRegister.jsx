import React, { useState } from 'react'
import './InvesterRegister.css'
import InvestorRegImg from '../../../assets/investor_register.png'
import Footer from '../../Footer/Footer'
function InvesterRegister() {
const [prof,SetProf]=useState({profie:"Profile"})
  
  return (
    <>
    <div className='container'>
        <div className="header inv-reg-registernow">
            <p>REGISTER</p>
        </div>
        <div className="inv-reg-content">
            <p>Access Your World<br></br>of Innovation</p>
            <div className='inv-reg-line' ></div>
        </div>
        <div className='row'>
          <img className='col inv-reg-img' src={InvestorRegImg}></img>
          
          <div className='col'>
            <div class="">
            <label id="label-input">Name</label>
              <input class="input-cal input-base" name="name" id="input" placeholder="" type="text"/>
            </div>
            
              <div class="   pt-2 inv-reg-email">
              <label id="label-input">E-mail ID</label>
                <input class="input-cal input-base" id="input" name="email" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2 inv-reg-email">
              <label id="label-input">Contact Number</label>
                <input class="input-cal input-base" id="input" name="contact" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2 inv-reg-email">
              <label id="label-input">Organization</label>
                <input class="input-cal input-base" id="input" name="organization" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2 inv-reg-email">
              <label id="label-input">Nationality</label>
                <input class="input-cal input-base" id="input" name="nationality" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2 inv-reg-email">
              <label id="label-input">Password</label>
                <input class="input-cal input-base" id="input" name="password" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2">
              <label id="label-input">Confirm Password</label>
                <input class="input-cal input-base" id="input" name="confirm_password" placeholder="" type="text"/>
              </div>
              
            
            </div>
            <div className='col'>
              <div class="relative">
              <label id="label-input">Industry Sector</label>
                <select class="input-cal input-base " id="input"  name="industry_sector">
                  <option hidden="">Industry Sector</option>
                  <option value="Abc">Abc</option>
                  <option value="Def">Def</option>
                  <option value="Ghi">Ghi</option>
                </select>
                
              </div>
              <div class="relative pt-2">
              <label id="label-input">Occupation</label>
                <input class="input-cal input-base" id="input" name="occupation" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2">
              <label id="label-input">Description</label>
                <input class="input-cal input-base" id="input" name="description" placeholder="" type="text"/>
              </div>
              <div class="relative pt-2">
              <label id="label-input">Address</label>
                <input class="input-cal input-base" id="input" name="address" placeholder="" type="text"/>
              </div>
              <div class="relative mt-2">
              <label id="">Profile</label>
                <div className='inv-reg-profile pt-3 '>  
              <label for="file" class="inv-reg-file-upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="profile" />
                </label>
                </div>
              </div>
              <div class="relative mt-2">
              <label id="">Identification Document</label>
              <div className='inv-reg-profile pt-3'>
                <label for="file" class="inv-reg-file-upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="identification_document" />
                </label>
                </div>
              </div>
              <div class="relative mt-5">
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
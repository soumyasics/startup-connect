import React, { useState } from 'react'
import '../Invester/InvesterRegister.css'
import InvestorRegImg from '../../assets/investor_register.png'

function InvesterRegister() {
const [prof,SetProf]=useState({profie:"Profile"})
  
  return (
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
            <div class="relative">
              <input class="input-cal input-base" id="input" placeholder="" type="text"/>
              <label id="label-input">Name</label>
            </div>
            
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">E-mail ID</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Contact Number</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Organization</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Nationality</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Password</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Confirm Password</label>
              </div>
              
            
            </div>
            <div className='col'>
              <div class="relative">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Industry Sector</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Occupation</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Description</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="input" placeholder="" type="text"/>
                <label id="label-input">Address</label>
              </div>
              <div class="relative pt-4 inv-reg-profile ">
              <label for="file" class="custum-file-upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="emp_profile" />
                </label>
                <label id="label-input">{prof.profie}</label>
                
              </div>
              <div class="relative pt-4 inv-reg-profile ">
              
                <label for="file" class="custum-file-upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="" />
                </label>
                <label id="label-input">Identification Document</label>
              </div>
              <div class="relative pt-2">
              <button className='inv-reg-btn'>Register</button> 
              </div>
            </div>
          </div>
          

      </div>
    
        

  )
}

export default InvesterRegister
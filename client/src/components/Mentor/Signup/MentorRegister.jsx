import React from 'react'
import '../Signup/MentorRegister.css'
import MentorRegisterimg from '../../../assets/mentor_register.png'
import Footer from '../../Footer/Footer'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'

function MentorRegister() {
  return (
    <>
    <CommonNavbar/>
    <div className='container'>
        <div className="header men-reg-registernow">
            <p>REGISTER</p>
        </div>
        <div className="men-reg-content">
            <p>Access Your World<br></br>of Innovation</p>
            <div className='men-reg-line' ></div>
        </div>
        <div className='row mb-5' >
          <img className='col men-reg-img' src={MentorRegisterimg}></img>
          
          <div className='col'>
            <div class="relative">
              <input class="input-cal input-base" name="name" id="men-input" placeholder="" type="text"/>
              <label id="label-input">Name</label>
            </div>
            
              <div class="relative pt-2 ">
                <input class="input-cal input-base" id="men-input" name="email" placeholder="" type="email"/>
                <label id="label-input">E-mail ID</label>
              </div>
              <div class="relative pt-2 ">
                <input class="input-cal input-base" id="men-input" name="contact" placeholder="" type="text"/>
                <label id="label-input">Contact Number</label>
              </div>
              <div class="relative pt-2 ">
                <input class="input-cal input-base" id="men-input" name="organization" placeholder="" type="text"/>
                <label id="label-input">Username</label>
              </div>
              <div class="relative pt-2 ">
                <input class="input-cal input-base" id="men-input" name="password" placeholder="" type="password"/>
                <label id="label-input">Password</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="men-input" name="confirm_password" placeholder="" type="password"/>
                <label id="label-input">Confirm Password</label>
              </div>
              
            
            </div>
            <div className='col'>
              <div class="relative">
                
                <select class="input-cal input-base " id="men-input"  name="industry_sector">
                  <option hidden="">Expertise area</option>
                  <option value="Abc">Abc</option>
                  <option value="Def">Def</option>
                  <option value="Ghi">Ghi</option>
                </select>
                
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="men-input" name="occupation" placeholder="" type="text"/>
                <label id="label-input">Description</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="men-input" name="description" placeholder="" type="text"/>
                <label id="label-input">Subscription Amount</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="men-input" name="address" placeholder="" type="text"/>
                <label id="label-input">Demo Video Link</label>
              </div>
              <div class="relative pt-4 men-reg-profile ">
              <label for="file" class="men-reg-file-upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="profile" />
                </label>
                <label id="label-input">Profile</label>
                
              </div>

              <div class="relative pt-2">
              <button className='men-reg-btn'>Register</button> 
              </div>
            </div>
          </div>
          
    </div>
    <Footer/>
    </>
  )
}

export default MentorRegister
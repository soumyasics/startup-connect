import React from 'react'
import './MentorRegister.css'
import MentorRegImg from '../../../assets/mentor_register_img.png'
import Footer from '../../Footer/Footer'

function MentorRegister() {
  return (
    <>

        
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
          <img className='col mentor_reg_img' src={MentorRegImg}></img>
          
          <div className='col'>
            <div class="relative">
              <input class="input-cal input-base" name="name" id="mentor_input" placeholder="" type="text"/>
              <label id="label-input">Name</label>
            </div>
            
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="mentor_input" name="email" placeholder="" type="text"/>
                <label id="label-input">E-mail ID</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="mentor_input" name="contact" placeholder="" type="text"/>
                <label id="label-input">Contact Number</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="mentor_input" name="organization" placeholder="" type="text"/>
                <label id="label-input">Username</label>
              </div>
              <div class="relative pt-2 inv-reg-email">
                <input class="input-cal input-base" id="mentor_input" name="password" placeholder="" type="text"/>
                <label id="label-input">Password</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="mentor_input" name="confirm_password" placeholder="" type="text"/>
                <label id="label-input">Confirm Password</label>
              </div>
              
            
            </div>
            <div className='col'>
              <div class="relative">
                
                <select class="input-cal input-base " id="mentor_input"  name="industry_sector">
                  <option hidden="">Expertise Area</option>
                  <option value="Abc">Abc</option>
                  <option value="Def">Def</option>
                  <option value="Ghi">Ghi</option>
                </select>
                
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="mentor_input" name="description" placeholder="" type="text"/>
                <label id="label-input">Description</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="mentor_input" name="address" placeholder="" type="text"/>
                <label id="label-input">Subscription Amount</label>
              </div>
              <div class="relative pt-2">
                <input class="input-cal input-base" id="mentor_input" name="address" placeholder="" type="text"/>
                <label id="label-input">Demo Video Link</label>
              </div>
              <div class="relative pt-4 mentor_reg_profile ">
              <label for="file" class="men_reg_file_upload">
                  <div class="icon">Upload</div>
                  <input id="file" type="file"  name="profile" />
                </label>
                <label id="label-input">Profile</label>
                
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
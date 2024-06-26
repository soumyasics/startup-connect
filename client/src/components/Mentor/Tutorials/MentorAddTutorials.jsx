import React from 'react'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import MentorNav from '../MentorNav/MentorNav'
import Footer_2 from '../../Footer/Footer_2'
import './MentorAddTutorials.css'

function MentorAddTutorials() {
  return (
    <>
        <CommonNavbar/>
        <MentorNav/>
        <div>
        <div className="text-center headr">
            <h4 className="  mt-3  mentor_addtutorials_mainheading"> CREATE TUTORIALS</h4>
            <h3 className="mentor_addtutorials_sub_h3">Shape Your Future</h3>
            <div className="  mb-5   mentor_addtutorials_hr_line"></div>
        </div>
        <div className='mentor_addtutorials_maindiv'>
            <div className='row mentor_addtutorials_row'>
                <div className='col-3'>
                    <p>Title</p>
                </div>
                <div className='col-9'>
                    <input class="mentor-addtutorials-input" id="tut_input" name="" placeholder="" type="text"/>
                </div>
            </div>
            <div className='row mentor_addtutorials_row'>
                <div className='col-3'>
                    <p>Description</p>
                </div>
                <div className='col-9'>
                    <input class="mentor-addtutorials-input" id="tut_input" name="" placeholder="" type="text"/>
                </div>
            </div>
            <div className='row mentor_addtutorials_row'>
                <div className='col-3'>
                    <p>Video Link</p>
                </div>
                <div className='col-9'>
                    <div class=" relative pt-4 ent_reg_profile">
                    <label for="file" class="ent_reg_file_upload">
                        <div class="icon">Upload</div>
                        <input id="file" type="file"  name="image"/>
                    </label>
                    </div>                
                </div>
            </div>
            <div className='row mentor_addtutorials_row'>
                <div className='col-3'>
                </div>
                <div className='col-9'>
                    <button className='menter_addtutorials_btn' type="submit" >Add Tutorial</button>
                    <button className='menter_addtutorials_btn mentor_addtutorials_secbtn' type="submit" >Cancel</button> 
 
                </div>
            </div>
        </div>
        </div>
        <Footer_2/>   
    </>
  )
}

export default MentorAddTutorials
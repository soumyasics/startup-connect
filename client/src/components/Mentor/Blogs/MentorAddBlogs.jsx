import React from 'react'
import './MentorAddBlogs.css'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import MentorNav from '../MentorNav/MentorNav'
import Footer_2 from '../../Footer/Footer_2'

function MentorAddBlogs() {
  return (
    <>
        <CommonNavbar/>
        <MentorNav/>
        <div>
        <div className="text-center headr">
            <h4 className="  mt-3  mentor_addblog_mainheading"> ADD BLOGS</h4>
            <h3 className="mentor_addblog_sub_h3">Shape Your Future</h3>
            <div className="  mb-5   mentor_addblog_hr_line"></div>
        </div>
        <div className='mentor_addblog_maindiv'>
            <div className='row mentor_addblogs_row'>
                <div className='col-3'>
                    <p>Blog Name</p>
                </div>
                <div className='col-9'>
                    <input class="mentor-addblogs-input" id="blog_input" name="" placeholder="" type="text"/>
                </div>
            </div>
            <div className='row mentor_addblogs_row'>
                <div className='col-3'>
                    <p>Description</p>
                </div>
                <div className='col-9'>
                    <input class="mentor-addblogs-input" id="blog_input" name="" placeholder="" type="text"/>
                </div>
            </div>
            <div className='row mentor_addblogs_row'>
                <div className='col-3'>
                    <p>Cover Image</p>
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
            <div className='row mentor_addblogs_row'>
                <div className='col-3'>
                </div>
                <div className='col-9'>
                    <button className='menter_addblog_btn' type="submit" >Add Blog</button>
                    <button className='menter_addblog_btn mentor_addblog_secbtn' type="submit" >Cancel</button> 
                </div>
            </div>
        </div>
        </div>
        <Footer_2/>   
    </>
  )
}

export default MentorAddBlogs
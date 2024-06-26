import React from 'react'
import './MentorEditTutorials.css'
import Footer_2 from '../../Footer/Footer_2'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import MentorNav from '../MentorNav/MentorNav'

function MentorEditTutorials() {
  return (
    <>
    <CommonNavbar />
    <MentorNav />
    <div className="text-center headr">
        <h4 className="mt-3 mentor_viewblog_mainheading">EDIT BLOGS</h4>
        <h3 className="mentor_viewblog_sub_h3">Shape Your Future</h3>
        <div className="mb-5 mentor_viewblog_hr_line"></div>
    </div>

    <div className='container mentor_editblog_main'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 mentor_editblog_col'>
            <img src={editcover} className='ing-fluid mentor_editblog_img'/>

            </div>
            <div className='col-md-6 col-sm-12'>
                <div className='row mentor_editblog_mainrow  mentor_editblog_firstp'>
                    <div className='col-4'>
                        <p className='mentor_editblog_p'>Blog Name</p>
                    </div>
                    <div className='col-8'>
                    <input class="mentor-addblogs-input" id="blog_input" name="" placeholder="" type="text"/>
                    </div>
                </div>
                <div className='row mentor_editblog_mainrow'>
                    <div className='col-4'>
                        <p className='mentor_editblog_p'>Description</p>
                    </div>
                    <div className='col-8'>
                    <textarea class="mentor-addblogs-input" id="blog_input" name="" placeholder="" rows={5}/>
                    </div>
                </div>
                <div className='row mentor_editblog_mainrow'>
                <div className='col-3'>
                </div>
                <div className='col-9'>
                    <button className='menter_editblog_btn' >Update Blog</button>
                    <button className='menter_editblog_btn mentor_addblog_secbtn' >Cancel</button> 
 
                </div>
            </div>
            </div>
        </div>
    </div>
    <Footer_2 />
    </>
  )
}

export default MentorEditTutorials
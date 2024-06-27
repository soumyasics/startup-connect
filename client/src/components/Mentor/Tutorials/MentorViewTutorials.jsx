import React from 'react'
import './MentorViewTutorials.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CommonNavbar } from '../../commonNavbar/commonNavbar';
import MentorNav from '../MentorNav/MentorNav';
import Footer_2 from '../../Footer/Footer_2';
import tutorialvideo from '../../../assets/tutorial-1.mp4'

const tutorials = [
    {
      title: "How to build a website",
      content: "Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero."
    },
    {
      title: "Benefits of Responsive Design",
      content: "Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero."
    },
  ];

function MentorViewTutorials() {
  return (
    <>
      <CommonNavbar />
      <MentorNav />
      <div className="text-center headr">
        <h4 className="mt-3 mentor_viewtutorial_mainheading">VIEW TUTORIAL</h4>
        <h3 className="mentor_viewtutorial_sub_h3">Share Your Ideas</h3>
        <div className="mb-5 mentor_viewtutorial_hr_line"></div>
      </div>

      <div className='container'>
        {tutorials.map((blog) => (
          <div className='row mentor_viewtutorial_mainrow'>
            <div className='col-md-5 col-sm-12 mentor_viewtutorial_fir_col'>
                <video className='img-fluid' controls>
                    <source src={tutorialvideo} type='video/mp4' />
                </video>           
            </div>
            <div className='col-md-7 col-sm-12 mentor_viewtutorial_sec_col'>
              <div className='row montor_row_viewtutorial'>
                <div className='col-7'>
                  <p>{blog.title}</p>
                </div>
                <div className='col-5'>
                  <FaRegCalendarAlt className='mentor-icon' /> 01/01/2024
                </div>
              </div>
              <label>{blog.content}</label>
              <div className='mentor_viewtutorial_button_div'>
                <button className='menter_viewtutorial_btn'><FaEdit /> Edit</button>
                <button className='menter_viewtutorial_btn mentor_addblog_secbtn'><RiDeleteBin5Fill /> Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer_2 />
    </>
  )
}

export default MentorViewTutorials
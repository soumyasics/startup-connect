import React, { useEffect, useState } from 'react'
import './MentorViewBlogs.css'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import MentorNav from '../MentorNav/MentorNav'
import Footer_2 from '../../Footer/Footer_2'
import { imageUrl } from '../../../ImageAPIs/Image_Urls';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axiosInstance from '../../../BaseAPIs/AxiosInstance'
import { useNavigate } from 'react-router-dom'



function MentorViewBlogs() {

  const navigate=useNavigate();

  const navigateToeditBlog=(id)=>{
    navigate(`/mentor/editblogs/${id}`)
  }

  const [blogdata, setBlogData]=useState("");

  useEffect(()=>{
    axiosInstance.post('/mentorViewBlog')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setBlogData(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])

  const removeMentorBlog=(id)=>{
    axiosInstance.post(`/mentorRemoveBlog/${id}`)
    .then((res)=>{
      if(res.status === 200){
        alert("Data deleted Successfully")
        window.location.reload(false)
        alert("One Data Deleted")
      }
    })
    .catch((err)=>{
      console.log(err);
      alert(err)
    })
  }

  return (
    <>
      <CommonNavbar />
      <MentorNav />
      <div className="text-center headr">
        <h4 className="mt-3 mentor_viewblog_mainheading">OUR BLOGS</h4>
        <h3 className="mentor_viewblog_sub_h3">Share Your Ideas</h3>
        <div className="mb-5 mentor_viewblog_hr_line"></div>
      </div>

      <div className='container'>
      {
        (blogdata.length)>0?((blogdata).map((data) => {
          return(
          <div className='row mentor_viewblog_mainrow'>
            <div className='col-md-5 col-sm-12 mentor_viewblogs_fir_col'>
              <img src={`${imageUrl}/${data.coverImage.filename}`} className='img-fluid mentorviewblog_coverimage' alt='Blog' />
            </div>
            <div className='col-md-7 col-sm-12 mentor_viewblogs_sec_col'>
              <div className='row montor_row_viwblog'>
                <div className='col-7'>
                  <p>{data.blogName}</p>
                </div>
                <div className='col-5'>
                  <FaRegCalendarAlt className='mentor-icon' /> 01/01/2024
                </div>
              </div>
              <label>{data.description}</label>
              <div className='mentor_viewblog_button_div'>
                <button className='menter_viewblog_btn' onClick={()=>{navigateToeditBlog(data._id)}}><FaEdit /> Edit</button>
                <button className='menter_viewblog_btn mentor_addblog_secbtn'
                onClick={()=>removeMentorBlog(data._id)}
                ><RiDeleteBin5Fill /> Remove</button>
              </div>
            </div>
          </div>
        )
      })):(<h3>No Records Required</h3>)
      } 
      </div>
      <Footer_2 />
    </>
  )
}

export default MentorViewBlogs

import React, { useEffect, useState } from 'react'
import './MentorViewTutorials.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CommonNavbar } from '../../commonNavbar/commonNavbar';
import MentorNav from '../MentorNav/MentorNav';
import Footer_2 from '../../Footer/Footer_2';
import tutorialvideo from '../../../assets/tutorial-1.mp4'
import axiosInstance from '../../../BaseAPIs/AxiosInstance';
import { imageUrl } from '../../../ImageAPIs/Image_Urls';

function MentorViewTutorials() {
  const [tutorialdata, setTutorialData]=useState();
  const [videoFile, setVideoFile] = useState("")


  useEffect(()=>{
    axiosInstance.post('/mentorViewTutorial')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setTutorialData(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])

  useEffect(() => {
    if (tutorialdata.videolink?.filename) {

        setVideoFile(`${imageUrl}/${tutorialdata.videolink.filename}`)
    }
}, [])

  const removeMentorTutorial=(id)=>{
    axiosInstance.post(`/mentorRemoveTutorial/${id}`)
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
        <h4 className="mt-3 mentor_viewtutorial_mainheading">VIEW TUTORIAL</h4>
        <h3 className="mentor_viewtutorial_sub_h3">Share Your Ideas</h3>
        <div className="mb-5 mentor_viewtutorial_hr_line"></div>
      </div>

      <div className='container'>
      {console.log("datas",tutorialdata)}
         {
        (tutorialdata.length)>0?((tutorialdata).map((data) => {
          return(
          <div className='row mentor_viewtutorial_mainrow'>
            <div className='col-md-5 col-sm-12 mentor_viewtutorial_fir_col'>
            { videoFile && 
                    <video width="300" height="200" controls autostart autoPlay src={videoFile} type="video/mp4">
                      
                    </video>
                    }     
            </div>
            <div className='col-md-7 col-sm-12 mentor_viewtutorial_sec_col'>
              <div className='row montor_row_viewtutorial'>
                <div className='col-7'>
                  <p>{data.title}</p>
                </div>
                <div className='col-5'>
                  <FaRegCalendarAlt className='mentor-icon' /> 01/01/2024
                </div>
              </div>
              <label>{data.description}</label>
              <div className='mentor_viewtutorial_button_div'>
                <button className='menter_viewtutorial_btn'><FaEdit /> Edit</button>
                <button className='menter_viewtutorial_btn mentor_addblog_secbtn'><RiDeleteBin5Fill /> Remove</button>
              </div>
            </div>
          </div>
        )
      })):(
      
        <h1>No Investors Found</h1>
      )
      } 
      </div>
      <Footer_2 />
    </>
  )
}

export default MentorViewTutorials
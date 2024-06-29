import React, { useEffect, useState } from 'react'
import './RequestInvestor.css'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../BaseAPIs/AxiosInstance'
import { imageUrl } from '../../ImageAPIs/Image_Urls'
function RequestInvestor() {

    const navigate=useNavigate();

    

  const [investorData, setInvestordata]= useState({});

  useEffect(()=>{
    if(localStorage.getItem("Enterprenuertoken")== null && localStorage.getItem("Enterprenuer") == null ){
      navigate("/");
    }
  },[navigate]);

  useEffect(()=>{
    axiosInstance.post('/viewInvestors')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setInvestordata(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])


  const navigateToInvestorView = (id)=>{
    navigate(`/entrepreneur/investorreqview/${id}`)
  }
  return (
    <>
    <CommonNavbar/>
    <HomepageNavbar/>
    <div className="container mb-4">
        <div className="text-center ">
            <h4 className="  mt-3  ent_invreq_mainheading">TOP INVESTORS</h4>
            <h3 className="ent_invreq_sub_h3">Your Ideas, Our Mission</h3>
            <div className="  mb-5  ent_invreq_hr_line "></div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {console.log("datas",investorData)}
         {
        (investorData?.length)>0?((investorData).map((data) => {
          return(
            
          <div class="col">
            <div class="ent_invreq_profile">
              <img src={`${imageUrl}/${data.profile.filename}`} class="ent_invreq_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invreq_fname">{data.name}</h5>
                <h3 className='ent_invreq_name'>INVESTOR</h3>
                <button className='ent_invreq_btn' onClick={()=>navigateToInvestorView(data._id)} >Request</button>
              </div>
            </div>
          </div>
            
          )
        })):(
        
          <h1>No Investors Found</h1>
        )
        } 
          
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default RequestInvestor
import React, { useEffect, useState } from 'react'
import './ViewStartUpPlan.css'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomePageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../BaseAPIs/AxiosInstance'

function ViewStartUpPlan() {

    const navigate=useNavigate();

  const [data, setData]= useState({});

  useEffect(()=>{
    if(localStorage.getItem("Enterprenuertoken")== null && localStorage.getItem("Enterprenuer") == null ){
      navigate("/");
    }
  },[navigate]);

  useEffect(()=>{
    axiosInstance.post('/viewStartupPlan')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setData(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])
  return (
    <>
    <CommonNavbar/>
    <HomePageNavbar/>
    <div className='container mb-3'>
    <div className="text-center ">
            <h4 className="  mt-3  ent_viewsplan_mainheading">CREATE YOUR STARTUP</h4>
            <h3 className="ent_viewsplan_sub_h3">Your big opportunity may be right</h3>
            <h3 className="ent_viewsplan_sub_h3"> where you are now</h3>
            <div className="  mb-5  ent_viewsplan_hr_line "></div>
        </div>
        <div><h3>GreenTech Innovations:</h3></div>

        
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
        
            <div class="col">
                <div class="ent_viewsplan_profile">
                    <tr className='ent_viewsplan_subhead'><th>Company Name:</th></tr>
                    <tr><td>GreenTech Innovations</td></tr> 
                    <tr className='ent_viewsplan_subhead'><th>Is developing:</th></tr>
                    <tr><td>GreenTech Innovations</td></tr>
                    <tr className='ent_viewsplan_subhead'><th>To help:</th></tr>
                    <tr><td>GreenTech Innovations</td></tr>
                    <tr className='ent_viewsplan_subhead'><th>To solve:</th></tr>
                    <tr><td>GreenTech Innovations</td></tr>
                    <tr className='ent_viewsplan_subhead'><th>With:</th></tr>
                    <tr><td>GreenTech Innovations</td></tr>
            </div>
                
            </div>
            <div class="col">
                <div class="ent_viewsplan_profile">
                    <tr className='ent_viewsplan_subhead'><th>We compete in the growing:</th></tr>
                    <tr><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>Which last year was a:</th></tr>
                    <tr><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>We are similar to competitor 1:</th></tr>
                    <tr ><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>Competitor 2:</th></tr>
                    <tr><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>But we:</th></tr>
                    <tr><td></td></tr>
                </div>
                
            </div>
            <div class="col">
                <div class="ent_viewsplan_profile">
                    <tr className='ent_viewsplan_subhead'><th>Currently we have:</th></tr>
                    <tr><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>We are looking for:</th></tr>
                    <tr><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>To help us:</th></tr>
                    <tr><td></td></tr>
                    <tr className='ent_viewsplan_subhead'><th>In exchange for:</th></tr>
                    <tr><td></td></tr>
                    <div className='ent_viewsplan_reqbtn_div'>
                        <button className='ent_viewsplan_reqbtn'>Request an Investor</button>
                        <button className='ent_viewsplan_editbtn'> Edit</button>
                        <button className='ent_viewsplan_delbtn'>Del</button>

                    </div>
                </div>
                
          </div>
        
        </div>
  
   </div>
    <Footer/>
    </>
  )
}

export default ViewStartUpPlan
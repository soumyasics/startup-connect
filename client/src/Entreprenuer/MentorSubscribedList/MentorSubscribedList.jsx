import React from 'react'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer_2 from '../../components/Footer/Footer_2'
import eye from "../../assets/carbon_view-filled.png";

function MentorSubscribedList() {
  return (
    <>
        <CommonNavbar/>
        <HomepageNavbar/>
        <div className='container'>
    <div className="text-center ">
          <h4 className="  mt-3  inv_mainheading">View All</h4>
          <h3 className="inv_sub_h3">New Mentors</h3>
          <div className="  mb-5  inv_hr_line "></div>
    </div>
    <table className="table">
      
  <thead >
    <tr  >
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">E-Mail ID</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Expertise Category</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Contact No</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Subscription Amount</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  
        
      
    <tr>
      <th scope="row">
      <img 
      class="invviewadmin_profile_pic" alt="..."/>
        </th>
      <td>email</td>
      <td>expertise_area</td>
      <td>contact</td>
      <td>subscription_amount</td>
      <td style={{color:"rgba(52, 133, 208, 1)"}} ><img src={eye}></img> <a href="" >View Details</a></td>

    </tr>
  
   
  </tbody>

  
</table>
  
      </div>
        <Footer_2/>
    </>
  )
}

export default MentorSubscribedList
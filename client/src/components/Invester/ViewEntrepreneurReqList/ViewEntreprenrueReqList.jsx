import React from 'react'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import Footer_2 from '../../Footer/Footer_2'
import InvestorNav from '../InvestorNav/InvestorNav'

function ViewEntreprenrueReqList() {
  return (
    <>
        <CommonNavbar/>
        <InvestorNav/>
        <div className='container'>
    <div className="text-center ">
          <h4 className="  mt-3  inv_mainheading">View All</h4>
          <h3 className="inv_sub_h3">Entrepreneur Requests</h3>
          <div className="  mb-5  inv_hr_line "></div>
    </div>
    <table className="table">
      
  <thead >
    <tr  >
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">E-Mail ID</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Industry Sector</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Contact No</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Corporate Identification Number</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  
      
    <tr>
      <th scope="row">
      <img src={`${imageUrl}/${data.profile.filename}`} 
      class="invviewadmin_profile_pic" alt="..."/>
        {data.name}</th>
      <td>{data.email}</td>
      <td>{data.investing_category}</td>
      <td>{data.contact}</td>
      <td>{data.nationality}</td>
      <td style={{color:"rgba(52, 133, 208, 1)"}} ><img src={eye}></img> <a href="" onClick={()=>navigateToInvestorView(data._id)}>View Details</a></td>

    </tr>
   
  </tbody>

  
</table>
  
      </div>
        <Footer_2/>
    </>
  )
}

export default ViewEntreprenrueReqList
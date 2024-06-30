import React, { useEffect, useState }  from 'react'
import AdminNavbar from '../AdminNavbar'
import { toast } from "react-toastify";
import { imageUrl } from '../../../ImageAPIs/Image_Urls';
import eye from "../../../assets/carbon_view-filled.png";
import { useNavigate } from 'react-router-dom';
import AdminFooter from '../AdminFooter';
import axiosInstance from '../../../BaseAPIs/AxiosInstance';

function EntrepreneurList() {
    const navigate = useNavigate();
    const navigateToMentorView = (id)=>{
        navigate(`/admin_dashboard/mentor_accept/${id}`)
      }
    const [entdata, setEntData]= useState({});

  useEffect(()=>{
    axiosInstance.post('/viewEntrepreneurs')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setEntData(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])
  return (
    <>
<AdminNavbar/>
    <div className='container admin_entlist_con'>
    <div className="text-center ">
          <h4 className="  mt-3  inv_mainheading">View All</h4>
          <h3 className="inv_sub_h3">Entrepreneurs</h3>
          <div className="  mb-5  inv_hr_line "></div>
    </div>
    <table className="table">
      
  <thead >
    <tr  >
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">E-Mail ID</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Industry Sector</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Contact No</th>

    </tr>
  </thead>
  <tbody>
  {
        (entdata.length)>0?((entdata).map((data) => {
          return(
      
    <tr>
      <th scope="row">
      <img src={`${imageUrl}/${data.image.filename}`} 
      class="invviewadmin_profile_pic" alt="..."/>
        {data.fname}{data.lname}</th>
      <td>{data.email}</td>
      <td>{data.industry_sector}</td>
      <td>{data.contact}</td>

    </tr>
   )
  })):(
  
    <h1>No Records</h1>
  )
  } 
  </tbody>

  
</table>
  
      </div>
      <AdminFooter/>
    </>
  )
}

export default EntrepreneurList
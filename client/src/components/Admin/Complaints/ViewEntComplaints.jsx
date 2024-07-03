import React,{useState,useEffect} from 'react'
import './ViewAllComplaints.css'
import AdminFooter from '../AdminFooter'
import AdminNavbar from '../AdminNavbar'
import axiosInstance from '../../../BaseAPIs/AxiosInstance';
import { imageUrl } from '../../../ImageAPIs/Image_Urls';

function ViewEntComplaints() {
    const [entcomplaintData, setEntComplaintdata]= useState("");

  useEffect(()=>{
    axiosInstance.post('/viewEntComplaint')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setEntComplaintdata(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])

  console.log(entcomplaintData,"data");

  

  const BanByAdmin=(id)=>{
    axiosInstance.post(`/entBanByAdmin/${id}`)
    .then((res)=>{
      if(res.status === 200){
        alert("User Banned")
      }
    })
    .catch((err)=>{
      console.log(err);
      alert(err)
    })
  }

  

  return (
    <>
        
        
    
    <h4 className='mb-3'>Entrepreneurs Complaints</h4>

    <table className="table">
  <thead >
    <tr  >
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col" className='px-5'>Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Complaint Description</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Company Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Complaint Date</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Ban</th>

    </tr>
  </thead>
  <tbody>
  {
        (entcomplaintData.length)>0?((entcomplaintData).map((data) => {
          return(
      
    <tr>
      <th scope="row">
      <img src={`${imageUrl}/${data.entId.image.filename}`} 
      class="ad_invviewcompl_profile_pic" alt="..."/>  
        {data.entId.fname} {data.entId.lname}</th>
      <td className='ad_compl_view_des'>{data.description}</td>
      <td>{data.entId.company_name}</td>
      <td>{data.date}</td>
      <td style={{color:"rgba(52, 133, 208, 1)"}} > 
      <button  className='ad_compl_ban_btn' disabled={false} onClick={()=>BanByAdmin(data.entId._id)}>Ban User</button></td>

    </tr>
   )
  })):(
  
    <h1>No Records</h1>
  )
  } 
  </tbody>

  
</table>
  
      
        
    </>
  )
}

export default ViewEntComplaints
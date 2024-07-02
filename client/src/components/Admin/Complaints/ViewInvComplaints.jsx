import React,{useState,useEffect} from 'react'
import './ViewAllComplaints.css'
import axiosInstance from '../../../BaseAPIs/AxiosInstance';
import { imageUrl } from '../../../ImageAPIs/Image_Urls';


function ViewInvComplaints() {
    const [invcomplaintData, setInvComplaintdata]= useState("");

  useEffect(()=>{
    axiosInstance.post('/viewInvestorComplaint')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setInvComplaintdata(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])

  console.log(invcomplaintData,"data");

  const BanByAdmin=(id)=>{
    axiosInstance.post(`/investorBanByAdmin/${id}`)
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
    
    <h4 className='mb-3 mt-5'>Investors Complaints</h4>

    <table className="table">
  <thead >
    <tr  >
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col" className='px-5'>Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Complaint Description</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col" className=''>Company Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Complaint Date</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Ban</th>

    </tr>
  </thead>
  <tbody>
  {
        (invcomplaintData.length)>0?((invcomplaintData).map((data) => {
          return(
      
    <tr>
      <th scope="row">
      <img src={`${imageUrl}/${data.investorId.profile.filename}`} 
      class="ad_invviewcompl_profile_pic" alt="..."/>  
        {data.investorId.name}</th>
      <td className='ad_compl_view_des'>{data.description}</td>
      <td>{data.investorId.organization}</td>
      <td>{data.date}</td>
      <td style={{color:"rgba(52, 133, 208, 1)"}} > 
      <button href="" onClick={()=>BanByAdmin(data.investorId._id)} className='ad_compl_ban_btn'>Ban User</button></td>

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

export default ViewInvComplaints
import React from 'react'
import AdminFooter from '../AdminFooter'
import AdminNavbar from '../AdminNavbar'
import { toast } from "react-toastify";
import eye from "../../../assets/carbon_view-filled.png";
import { useNavigate } from 'react-router-dom';
import { imageUrl } from '../../../ImageAPIs/Image_Urls';

function AdminViewEventRegList() {
    const navigate = useNavigate();
    const navigateToInvestorView = (id)=>{
        navigate(`/admin_dashboard/viewinvestor/${id}`)
      }
    const [eventregdata, setEventRegData]= useState({});

  useEffect(()=>{
    axiosInstance.post('/viewEventRegistration')
    .then((res)=>{
      console.log(res,"res");
      if(res.status === 200){
        setEventRegData(res.data.data)
      }
    })
    .catch((err)=>{
      toast.error("Failed to fetch user details")
  });
  },[])
  return (
    <>
        <AdminNavbar/>
        <div className='container' style={{minHeight:"80vh"}}>
    <div className="text-center ">
          <h4 className="  mt-3  inv_mainheading">VIEW</h4>
          <h3 className="inv_sub_h3">Event Registration</h3>
          <div className="  mb-5  inv_hr_line "></div>
    </div>
    <table className="table">
      
  <thead >
    <tr  >
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Name</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">E-Mail ID</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Investing Category</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Contact No</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Nationality</th>
      <th  style={{backgroundColor:"rgba(140, 220, 249, 1)"}} scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  {
        (investorData.length)>0?((investorData).map((data) => {
          return(
      
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

export default AdminViewEventRegList
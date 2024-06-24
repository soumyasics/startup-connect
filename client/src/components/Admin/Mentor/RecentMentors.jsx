import React, { useEffect, useState } from "react";
import arrow from "../../../assets/arrowlogo.png"
import eye from "../../../assets/carbon_view-filled.png"
import { toast } from "react-toastify";
import axiosInstance from '../../../BaseAPIs/AxiosInstance';
import { imageUrl } from '../../../ImageAPIs/Image_Urls';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function RecentMentors() {
  const navigate = useNavigate();

    const navigateToMoreInvestor = () => {
        navigate("/admin_dashboard/recent_investorlist");
    };
    const navigateToInvestorView = (id)=>{
      navigate(`/admin_dashboard/investor_accept/${id}`)
    }
  const [investorData, setInvestordata]= useState({});

  useEffect(()=>{
    axiosInstance.post('/viewlessinvestors')
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

  return (
    <div>
      <div className="mt-5">
        <p className="text-info">View</p>
        <div>
          <h4>Recent Mentors</h4>
          <table className="table">
            <thead style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}>
              <tr style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Name
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  E-Mail ID
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Investing Category
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Contact No
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  Nationality
                </th>
                <th
                  style={{ backgroundColor: "rgba(140, 220, 249, 1)" }}
                  scope="col"
                >
                  {" "}
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {
        (investorData.length)>0?((investorData).map((data) => {
          return(
              <tr>
                <th scope="row"><img src={`${imageUrl}/${data.profile.filename}`} 
      class="invviewadmin_profile_pic" alt="..."/>
        {data.name}</th>
                <td>{data.email}</td>
                <td>{data.investing_category}</td>
                <td>{data.contact}</td>
                <td>{data.nationality}</td>
                <td style={{color:"rgba(52, 133, 208, 1)"}} ><img src={eye}></img> View Details
                </td>
              </tr>
              )
            })):(
            
              <h1>No Records</h1>
            )
            } 
            </tbody>
          </table>
        </div>
      </div>      <p style={{color:"rgba(52, 133, 208, 1)"}} className='text-end'>View All <img src={arrow}></img></p>

    </div>
  );
}

export default RecentMentors;

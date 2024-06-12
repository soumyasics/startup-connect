import React, { useEffect, useState } from 'react'
import './Entprofile.css'
import profileimage from '../../assets/Ellipse 5.png'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer_2 from '../../components/Footer/Footer_2'
import axiosInstance from '../../BaseAPIs/AxiosInstance'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Entprofile() {
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("Enterprenuertoken") == null && localStorage.getItem("Enterprenuer") == null) {
          navigate("/");
        }
    }, [navigate]);

      const id = localStorage.getItem('Enterprenuer');
      console.log("eid",id);

      useEffect(()=>{
        axiosInstance.post(`/viewEntrepreneurById/${id}`)
        .then ((res)=>{
            console.log(res);
            if (res.status === 200){
                setUserDetails(res.data.data);
            }
        })
        .catch((err)=>{
            toast.error("Failed to fetch user details")
        });
      },[id]);
      console.log(userDetails,"details");
      

      

    return (
        
        <>
        <CommonNavbar/>
        <HomepageNavbar/>
            <div className='text-center mt-4'>
                <div className='text-center' >
                    <h5 className='your_profile'>YOUR PROFILE</h5>
                    <h5>Keep Your Profile Updated!</h5>
                    <div className='yourprofile_underline mt-3'></div>
                </div>

                <div >
                    <img  className='profile_round mt-5' src="http://localhost:4040/{{userDetails.image}}"/>

                </div>
            </div>

            <div class="container text-center mt-5 mb-4">
                
                <div class="row">
                    <div class="col-lg-6 profile-inputtag">
                        <input 
                        type='text' 
                        placeholder='First Name'
                        value={userDetails.fname}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Company Name'
                        value={userDetails.company_name}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Industry Sector'
                        value={userDetails.industry_sector}
                        ></input>
                        <input className='mt-4' 
                        type='email' 
                        placeholder='E-Mail ID'
                        value={userDetails.email}
                        ></input>
                        <input className='mt-4' 
                        type='number' 
                        placeholder='Contact Number'
                        value={userDetails.contact}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Address'
                        value={userDetails.address}
                        ></input>


                    </div>
                    <div class="col-lg-6 profile-inputtag">
                        <input 
                        type='text' 
                        placeholder='Last Name'
                        value={userDetails.lname}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Corporate Identification Number'
                        value={userDetails.corporate_id_no}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Company Description'
                        value={userDetails.company_description}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Location'
                        value={userDetails.location}
                        ></input>
                        <input className='mt-4' 
                        type='text' 
                        placeholder='Username'
                        value={userDetails.username}
                        ></input>
                        <div className='ent_pro_file_upload1'>
                            <label className='pt-3 px-1'>Profile</label>
                            <label for="file" class="ent_pro_file_upload">
                                <div class="icon">Upload</div>
                                <input id="file" type="file"  name="profile" />
                            </label>
                        </div>

                
                    <button className='yourprofileupdate_btn mt-5'>Update Profile</button>
                    </div>
               
            </div>
            
        </div>

        <Footer_2/>
        </>
    )
}

export default Entprofile

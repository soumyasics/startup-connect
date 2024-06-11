import React from 'react'
import './Entprofile.css'
import profileimage from '../../assets/Ellipse 5.png'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer_2 from '../../components/Footer/Footer_2'



function Entprofile() {
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
                    <img  className='profile_round mt-5' src={profileimage} />

                </div>
            </div>

            <div class="container text-center mt-5 mb-4">
                
                <div class="row">
                    <div class="col-lg-6 profile-inputtag">
                        <input type='text' placeholder='First Name'></input>
                        <input className='mt-4' type='text' placeholder='Company Name'></input>
                        <input className='mt-4' type='text' placeholder='Industry Sector'></input>
                        <input className='mt-4' type='email' placeholder='E-Mail ID'></input>
                        <input className='mt-4' type='number' placeholder='Contact Number'></input>
                        <input className='mt-4' type='text' placeholder='Address'></input>


                    </div>
                    <div class="col-lg-6 profile-inputtag">
                        <input type='text' placeholder='Last Name'></input>
                        <input className='mt-4' type='text' placeholder='Corporate Identification Number'></input>
                        <input className='mt-4' type='text' placeholder='Company Description'></input>
                        <input className='mt-4' type='email' placeholder='Location'></input>
                        <input className='mt-4' type='number' placeholder='Username'></input>
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

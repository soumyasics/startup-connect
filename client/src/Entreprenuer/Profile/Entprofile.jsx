import React from 'react'
import './Entprofile.css'
// import i from '../../assets/'



function Entprofile() {
    return (
        <div>
            <div className='text-center'>
                <div className='text-center' >
                    <h5 className='your_profile'>YOUR PROFILE</h5>
                    <h5>Keep Your Profile Updated!</h5>
                    <div className='yourprofile_underline mt-3'></div>
                </div>

                <div >
                    <img  className='profile_round mt-5' src='' />

                </div>
            </div>

            <div class="container text-center mt-5">
                
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
                        <input className='mt-4' type='file' placeholder='Address'></input>
                    </div>

                </div>
                    <button className='yourprofileupdate_btn mt-5'>Update Profile</button>

               
            </div>
            



        </div>
    )
}

export default Entprofile

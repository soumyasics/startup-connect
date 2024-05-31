import React from 'react'
import './Entsignup.css'
import Entbodyimage from '../../assets/Entregbodyimage.png'

function Entsignup() {
    return (
        <div>

            <div className='text-center'>


                <p className='Registernow '>Register Now</p>
                <h1 className='Registertopcontent '>Access Your World</h1>
                <h1 className='Registertopcontent' > of Innovation</h1>
                <hr className='mb-5 border border-3 border-info' style={{ margin: "0 45%" }}></hr>
            </div>
            <div className='pt-3 dummy'>
                <div class="row">
                    <div class="col ps-5 p-0">
                        <div>
                            <img  src={Entbodyimage} alt=''/>
                        </div>

                    </div>
                    <div class="col p-0">
                        <div>
                            <div  >
                                <div>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='First Name' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Company Name' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Industry Sector' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='email' placeholder='E-Mail ID' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='number' placeholder='Contact Number' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Address' />
                                </div>
                                <div className='ent-signup-input mt-4 pt-3 ps-3'>
                                    <input type='file'  id='chooseimage'/>Your Image

                                    
                                </div>


                            </div>
                        </div>

                    </div>


                    <div class="col p-0">
                        <div >
                            <div  >
                                <div>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Last Name' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Corporate Identification Number' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Company Description' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Location' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='text' placeholder='Username' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='password' placeholder='Password' />
                                </div>
                                <div className='pt-4'>
                                    <input className='ent-signup-input ps-3' type='password' placeholder='Confirm Password' />
                                </div>



                            </div>
                        </div>


                    </div>

                </div>
                <div class="row p-0">
                    <div class="col-4 p-0">
                      
                    </div>
                    <div class="col-8 text-center">
                    <button className='Entregbtn'>Register</button>

                    </div>
                    
                </div>

            </div>




        </div >



    )
}

export default Entsignup

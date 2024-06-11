import React from 'react'
import './Enthomepage.css'
import homecolumnimage from '../../assets/unsplash_gMsnXqILjp4.png'
import whitebox from '../../assets/whitebox.png'
import bluebox from '../../assets/bluebox.png'
import smallarrow from '../../assets/smallarrow.png'
import phonelogo from '../../assets/phone.png'
import backphone from '../../assets/img5.png'
import arrow from '../../assets/arrowlogo.png'
import homefirstimage from'../../assets/ForgotPassword.png'

function Enthomepage() {
    return (
        <div>
            <div className='Enthomebgimage'>
                <img src={homefirstimage} />
            </div>


            <div class="container ps-5  mt-5">

                <div className="row">
                    <div className="col-lg-6">
                        <div class="card-data d-flex justify-content-between align-items-center">
                            <div class="info-card-outer">
                                <div className="info-card-inner d-flex align-items-center gap-4">
                                    <div class="info-icon d-flex justify-content-center align-items-center">
                                        <img src={whitebox} alt="" />
                                    </div>
                                    <div class="info-detail d-flex flex-column align-items-center ">
                                        <span>Top Mentors</span>
                                        <span>12345</span>
                                    </div>
                                </div>
                            </div>
                            <div class="info-card-outer">
                                <div className="info-card-inner with-white d-flex align-items-center gap-4">
                                    <div class="info-icon d-flex justify-content-center align-items-center">
                                        <img src={bluebox} alt="" />
                                    </div>
                                    <div class="info-detail d-flex flex-column align-items-center ">
                                        <span>Top Mentors</span>
                                        <span>12345</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between  mt-4 '>
                            <div className='d-flex entsmallarowgap'>
                                <div><img src={smallarrow} alt='' /></div>
                                <h6>Reply within 24 hours</h6>
                            </div>
                            <div className='d-flex entsmallarowgap'>
                                <div><img src={phonelogo} alt='' /></div>
                                <h6>24 hrs telephone support</h6>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <p>Entrepreneur is your ultimate resource for everything related to starting, growing,
                                and managing your business. Whether you are a seasoned entrepreneur or just
                                beginning your journey, our platform offers a wealth of information, tools,
                                and inspiration to help you succeed.</p>
                        </div>

                        <div className='d-flex justify-content-between align-items-center mt-5'>
                            <div className='d-flex align-items-center phonelogospace'>
                                <div><img src={backphone}/></div>
                                <div className='d-flex flex-column'>
                                    <h6>Call to ask any question</h6>
                                    <a href="tel:">+012 345 6789</a>
                                </div>
                            </div>
                            <div>
                                <a href="">
                                    <span>View Top Mentors  <img src={arrow} alt="" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                        <img src={homecolumnimage} alt='' />

                    </div>
                </div>






            </div>






        </div>
    )
}

export default Enthomepage

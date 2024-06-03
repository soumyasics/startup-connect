import React from 'react'
import "./Footer.css";
import startuplog from "../../assets/startuplogo.png";
import Adresslogo from "../../assets/adress.png"
import Phonelogo from "../../assets/phone.png"
import Arrowlogo from "../../assets/arrowlogo.png"
import Twiterlogo from "../../assets/twiterlogo.png"
import Facebooklogo from "../..//assets/facebooklogo.png"
import Linkedinlogo from "../../assets/linkedinlogo.png"
import Instalogo from "../../assets/Group 19 (1).png"
import Emaillogo from "../../assets/Vector (1).png"


function Footer() {
    return (
        <div>
            <div className='footerbg '>
                <div class="row ps-5">
                    <div class="col-3 firstcolumn ">
                        <div >
                            <img className='startuplogo' src={startuplog} />

                        </div>
                        <div>
                            <p className='firstcolumnpara'>Lorem diam sit erat dolor elitr et, diam
                                lorem justo amet clita stet eos sit. Elitr
                                dolor duo lorem, elitr clita ipsum sea.
                                Diam amet erat lorem stet eos. Diam
                                amet et kasd eos duo.</p>
                        </div>
                    </div>
                    <div class="col-2 secondcolumn ms-5 ps-5">
                        <div  >
                            <div>
                                <h1 className='secondcolumncontent text-center'>Get In Touch</h1>
                                <hr className=' hrlinefirst'></hr>
                                <div>
                                    <div className='secondcolumnadress  '>

                                        <div ><img  src={Adresslogo} /><span>123 Street, New York,USA</span></div>
                                        <div className='pt-2 '><img  src={Emaillogo} /><span >info@example.com</span></div>
                                        <div className='pt-2'><img src={Phonelogo} /><span >+012 345 67890</span></div>
                                        <div className='mt-2'>
                                            <img className='me-1' src={Twiterlogo} />
                                            <img className='me-1' src={Facebooklogo} />
                                            <img src={Linkedinlogo} />
                                            <img src={Instalogo} />
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-2">
                        <div  >
                            <div>
                                <h1 className='secondcolumncontent text-center'>Quick Links</h1>
                                <hr className=' hrlinesecond'></hr>
                                <div>
                                    <div className='thirdcolumnadress'>

                                        <div><img src={Arrowlogo} /><span  >Home</span></div>
                                        <div>  <img src={Arrowlogo} /><span  >About Us</span></div>
                                        <div> <img src={Arrowlogo} /><span  >Services</span></div>
                                        <div>  <img src={Arrowlogo} /> <span >Sign In</span></div>
                                    </div>


                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-2">
                        <div  >
                            <div>
                                <h1 className='secondcolumncontent text-center'>Popular Links</h1>
                                <hr className=' hrlinethird'></hr>
                                <div>
                                    <div className='thirdcolumnadress '>

                                        <div><img src={Arrowlogo} /><span  >Home</span></div>
                                        <div>  <img src={Arrowlogo} /><span >About Us</span></div>
                                        <div> <img src={Arrowlogo} /><span  >Services</span></div>
                                        <div>  <img src={Arrowlogo} /> <span >Sign In</span></div>
                                    </div>


                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='footerbotomset p-0'>
                    <p className='botomcontent'>All Rights Reserved. Designed by Studen</p>

                </div>

            </div>


        </div>
    )
}

export default Footer

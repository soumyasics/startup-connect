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
            <div class="firstcolumn ">
                        <img className='startuplogo' src={startuplog} />
                        <p className='firstcolumnpara'>we combine technical expertise with creative thinking to deliver innovative solutions that exceed our clients' expectations. We take a collaborative approach to every project, working closely with our clients to understand their unique goals and challenges and tailor our solutions to meet their specific needs.</p>
            </div>
            <div className='footerbg '>
               
                <div class="row  pt-4 footer_div2">
                    
                    <div class="col-3 secondcolumn  ">
                        <div  >
                            <div className="text-center">
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
                
                

            </div>
            <div className='footerbotomset'>
                    <p className='botomcontent'>All Rights Reserved. Designed by Student</p>

                </div>


        </div>
    )
}

export default Footer
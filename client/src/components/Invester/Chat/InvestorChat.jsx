import React from 'react'
import './InvestorChat.css'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import Footer_2 from '../../Footer/Footer_2'
import InvestorNav from '../InvestorNav/InvestorNav'
import Navbar from "react-bootstrap/Navbar";
import inv_chat_search from '../../../assets/inv_chat_search.png'
import inv_chat_bell from '../../../assets/inv_chat_bell.png'
import inv_chat_love from '../../../assets/inv_chat_love.png'

import profile from "../../../assets/Ellipse 5.png"
// import Frame from ""
import { Link, useNavigate } from 'react-router-dom';

function InvestorChat() {
  return (
    <>
        <CommonNavbar/>
        <InvestorNav/>
            <div className='container inv_chat_con mb-5'>
                <section className='inv_chat_box mt-5'>
                    <div className='col inv_chat_nav'>
                        <img src={profile} className='inv_chat_profile' />
                        <p className=' inv_chat_name'>Investor Name</p>
                        <button className='inv_chat_nav_btn'><img className='inv_chat_nav_icon' src={inv_chat_search}/></button>
                        <button className='inv_chat_nav_btn'><img className='inv_chat_nav_icon' src={inv_chat_love}/></button>
                        <button className='inv_chat_nav_btn'><img className='inv_chat_nav_icon' src={inv_chat_bell}/></button>
                    </div>
                </section>
                <section>
                    <div className='inv_chat_foot'>
                    <button className='inv_chat_nav_btn'><img className='inv_chat_nav_icon' src={inv_chat_search}/></button>
                    <button className='inv_chat_nav_btn'><img className='inv_chat_nav_icon' src={inv_chat_search}/></button>

                    </div>
                </section>

            </div>
        <Footer_2/>
    </>
  )
}

export default InvestorChat
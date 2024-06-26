import React from 'react'
import './MentorPayment.css'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import Footer_2 from '../../Footer/Footer_2'
import MentorNav from '../MentorNav/MentorNav'

function MentorPayment() {
  return (
    <>
      <CommonNavbar/>
      <MentorNav/>  
      <div className="text-center headr">
            <h4 className="  mt-3  mentor_pay_mainheading"> PAY HERE</h4>
            <h3 className="mentor_pay_sub_h3">Payment Details</h3>
            <div className="  mb-5   mentor_pay_hr_line"></div>

        </div>
        <Footer_2/>   
    </>
  )
}

export default MentorPayment
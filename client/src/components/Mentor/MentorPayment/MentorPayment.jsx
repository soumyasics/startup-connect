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
            <div className="  mb-3   mentor_pay_hr_line"></div>

        </div>
        <div className='container mb-5' >
        
<form class="form" autocomplete="off">
  
  <div class="credit-card-info--form">
    <div class="input_container">
      <label for="password_field" class="input_label">Payment Type</label>
      <select class="input_field" >
        <option>Select</option>
        <option>SBI Card</option>
        <option>HDFC Bank</option>
        <option>Amazon Pay ICICI Credit card</option>
        <option>Axis Bank</option>
        <option>Air India SBI Signature credit Card</option>
        <option>ICICI Bank</option>
        <option>Canara Bank</option>
      </select>
    </div>
    <div class="input_container">
        <label  class="input_label">Card Number</label>
        <input type="number" className='input_field' placeholder='Valid Card Number'/>
    </div>
    <div class="input_container">
        <div class="split_label">
      <label for="password_field" class="input_label">Expiry Date </label>
      <label for="password_field" class="input_label">CVV Code</label>

      </div>

      <div class="split">
      <input id="" class="input_field" type="text" name=""  placeholder="DD"/>
      <input id="" class="input_field" type="text" name=""  placeholder="MM"/>
      <input id="" class="input_field" type="text" name=""  placeholder="YYYY"/>
      <input id="" class="input_field_cvv" type="text" name="cvv"  placeholder="CVV"/>
    </div>
    </div>
    <div className='input_container'>
    <div class="split_final_pay">
    <label for="password_field" class="input_label input_label_final_pay">Final Payment</label>
    <input id="password_field" class="input_field_final_pay" type="text" name="input-name" title="Expiry Date" placeholder=""/>
    </div>
    </div>
  </div>
    <button class="purchase--btn">Pay</button>
</form>

        </div>
        <Footer_2/>   
    </>
  )
}

export default MentorPayment
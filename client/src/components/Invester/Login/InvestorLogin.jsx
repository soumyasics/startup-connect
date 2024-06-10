import React from 'react'
import './InvestorLogin.css'
import InvesterLoginImg from '../../../assets/investor_login.png'
import { Link } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Navbar_2 from '../../commonNavbar/Navbar_2';


function InvestorLogin() {

  
  return (
    <>
    
      <Navbar_2/>
    <div className="container">
      <div className="text-center ">
            <h4 className="  mt-3  inv_mainheading"> INVESTOR LOGIN</h4>
            <h3 className="inv_sub_h3">Your Journey to Success </h3>
            <h3 className="inv_sub_h3">Starts Here</h3>
            <div className="  mb-5  inv_hr_line "></div>

        </div>
        <div className='row px-4'>
      <div className="col inv_login_img_div">
        <img className="inv_login_img mb-4" src={InvesterLoginImg} />
      </div>
      <div className='col mt-5 px-5'>
      <form className="inv_loginform">
        <label className="inv_login_email_label">Your Email</label>
        <input
          type="email"
          name="email"
          className="inv_login_email"/>
        <label className="inv_login_password_label">Password</label>
        <input
          type="password"
          name="password"
          className="inv_login_password"
        />
        <p className="text mt-2"><Link to="/entrepreneur/fogot-password">Forgot password</Link></p>
        
        <button className="inv_login_loginbtn" >
          Log In
        </button>
        <p className="mt-3 "> 
          please register first <Link  to="/investor/signup">Register</Link>
        </p>
      </form>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default InvestorLogin
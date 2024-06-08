import React from 'react'
import './MentorLogin.css'
import Frame from "../../../assets/Frame 40.png";
import MentorLoginImg from '../../../assets/mentor_login_img.png'
import { Link, useNavigate } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Navbar from "react-bootstrap/Container"


function MentorLogin() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/mentor/login");
  };

  return (
    <>
    <div className="container">
      <div className="text-center headr">
            <h4 className="  mt-3  mentor_mainheading"> MENTOR LOGIN</h4>
            <h3 className="mentor_sub_h3">Your Journey to Success </h3>
            <h3 className="mentor_sub_h3">Starts Here</h3>
            <hr
              className="  mb-4 border border-3 border-info"
              style={{ margin: "0 45%" }}
            ></hr>
        </div>
        <div className='row px-4'>
      <div className="col mentor_login_img_div">
        <img className="mentor_login_img mb-4" src={MentorLoginImg} />
      </div>
      <div className='col mt-5 px-5'>
      <form className="mentor_loginform">
        <label className="mentor_login_email_label">Your Email</label>
        <input
          type="email"
          name="email"
          className="mentor_login_email"/>
        <label className="mentor_login_password_label">Password</label>
        <input
          type="password"
          name="password"
          className="mentor_login_password"
        />
        <p className="text mt-2"><Link to="/entrepreneur/fogot-password">Forgot password</Link></p>
        
        <button className="mentor_login_loginbtn" >
          Log In
        </button>
        <p className="mt-3 "> 
          please register first <Link  to="/mentor/signup">Register</Link>
        </p>
      </form>
      </div>
      </div>
    </div>
     <Footer/>

    </>
  )
}

export default MentorLogin
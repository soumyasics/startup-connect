import React from 'react'
import './MentorLogin.css'
import MentorLoginImg from '../../../assets/mentor_login_img.png'


function MentorLogin() {
  

  return (
    <div>
    <div className="container mt-5">
    <div className="text-center headr">
            <h4 className="  mt-3  pmi_mainheading"> MENTOR LOGIN</h4>
            <h3 className="pmi_sub_h3">Your Journey to Success </h3>
            <h3 className="pmi_sub_h3">Starts Here</h3>
            <hr
              className="  mb-4 border border-3 border-info"
              style={{ margin: "0 45%" }}
            ></hr>
        </div>
      <div className="mentor_login_img_div">
        <img className="mentor_login_img" src={MentorLoginImg} />
      </div>
      <form className="mentor_loginform">
        <label className="mentor_login_email_label">Your Email</label>
        <input
          type="email"
          name="email"
          onChange={change}
          className="mentor_login_email"/>
        <label className="mentor_login_password_label">Password</label>
        <input
          type="password"
          name="password"
          onChange={change}
          className="mentor_login_password"
        />{errors.password && (
          <div className="text-danger errortext">{errors.password}</div>
        )}
        <p className="text-center mt-4"><Link to="/entrepreneur/fogot-password">Forgot password</Link></p>
        <p className=""> 
          please register first <Link  to="/entrepreneur/signup">Register</Link>
        </p>
        <button className="mentor_login_loginbtn" >
          Log In
        </button>
      </form>
    </div>
     

    </div>
  )
}

export default MentorLogin
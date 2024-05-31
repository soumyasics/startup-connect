import React from "react";
import "./ForgotPassMain.css";
import Forgotpasswordimage from "../../assets/ForgotPassword.png";

function ForgotPassMain() {
  return (
    <div className="container">
      <div className="ent-forgotpass-forgotpassword">
        <p>Forgot Password</p>
      </div>
      <div className="ent-forgotpass-content">
        <p>Recover Your Account</p>
      </div>
      <div className="ent-forgotpass-line"></div>
      <div className="ent-forgotpass-img_div">
        <img className="ent-forgotpass-img" src={Forgotpasswordimage} />
      </div>
      <form className="ent-forgotpass-forgotpassform">
        <label className="ent-forgotpass-email-label">Your Email</label>
        <input type="email" className="ent-forgotpass-email" />
        <label className="ent-forgotpass-newpassword-label">New Password</label>
        <input type="password" className="ent-forgotpass-newpassword" />
        <label className="ent-forgotpass-confirmpassword-label">
          Confirm Password
        </label>
        <input type="password" className="ent-forgotpass-confirmpassword" />
        <button className="ent-forgotpass-resetbtn">Reset</button>
        <button className="ent-forgotpass-cancelbtn">Cancel</button>
      </form>
    </div>
  );
}

export default ForgotPassMain;

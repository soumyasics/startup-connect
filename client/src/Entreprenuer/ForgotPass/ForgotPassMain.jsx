import React, { useState } from "react";
import "./ForgotPassMain.css";
import Forgotpasswordimage from "../../assets/ForgotPassword.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../BaseAPIs/AxiosInstance";

function ForgotPassMain() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const Navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const HandleClick = (e) => {
    e.preventDefault();
    console.log(data, "l");
    let errors = {};
    let formValid = true;

    if (!data.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    }

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
    if (!data.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (!passwordRegex.test(data.password)) {
      errors.password =
        "Password must contain at least one number, one special character, and one capital letter";
    }

    if (!data.confirmpassword.trim()) {
      formValid = false;
      errors.confirmpassword = "Confirm Password is required";
    } else if (data.confirmpassword !== data.password) {
      formValid = false;
      errors.confirmpassword = "Passwords do not match";
    }

    setErrors(errors);

    if (formValid) {
      axiosInstance
        .post("/forgotPasswordEntrepreneur", data)
        .then((result) => {
          console.log(result);
          alert(result.data.msg);
          Navigate("/entrepreneur/login");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.msg);
        });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="ent-forgotpass-forgotpassword ">
          <p>Forgot Password</p>
        </div>
        <div className="ent-forgotpass-content">
          <p>Recover Your Account</p>
        </div>
        <div className="ent-forgotpass-line"></div>
        <div className="ent-forgotpass-img_div">
          <img className="ent-forgotpass-img" src={Forgotpasswordimage} />
        </div>
        <form className="ent-loginpage-loginform">
          <label className="ent-loginpage-email-label">Your Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            className="ent-loginpage-email"
          />
          {errors.email && (
            <div className="text-danger errortext">{errors.email}</div>
          )}
          <label className="ent-loginpage-password-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            className="ent-loginpage-password"
          />
          {errors.password && (
            <div className="text-danger errortext">{errors.password}</div>
          )}
          <label className="ent-loginpage-password-label">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmpassword"
            onChange={handleInputChange}
            className="ent-loginpage-password"
          />
          {errors.confirmpassword && (
            <div className="text-danger errortext">
              {errors.confirmpassword}
            </div>
          )}

          <button className="ent-loginpage-loginbtn" onClick={HandleClick}>
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
export default ForgotPassMain;

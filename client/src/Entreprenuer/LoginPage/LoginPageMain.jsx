import React, { useState } from "react";
import "./LoginPageMain.css";
import Loginimage from "../../assets/Rectangle 10.png";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../BaseAPIs/AxiosInstance";

function LoginPageMain() {
  let formvalid = true;

  const [data, SetData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const Navigate = useNavigate();

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }

    if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
      return "Email must be a valid Gmail address";
    }

    if (fieldName === "Password") {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Password must contain at least one number, one special character, and one capital letter";
      }
    }

    return "";
  };

  const change = (b) => {
    const { name, value } = b.target;
    SetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(data);
    setErrors((prevData) => ({
      ...prevData,
      [name]: "",
    }));
    console.log(errors);
  };
  const HandleClick = (e) => {
    e.preventDefault();
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);
    setErrors(errors);

    if (!errors.email && !errors.password) {
      axiosInstance
        .post("/loginEntrepreneur", data)
        .then((result) => {
          const {  data, token } = result.data;
          localStorage.setItem("Enterprenuer", data._id);
          localStorage.setItem("Enterprenuertoken", token);
          alert("Enterprenuer Login Successfuly");

          Navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="ent-loginpage-loginhere">
        <p>Login Here</p>
      </div>
      <div className="ent-loginpage-content">
        <p>
          Your Journey to Success <br></br>Starts Here
        </p>
      </div>
      <div className="ent-loginpage-line"></div>
      <div className="ent-loginpage-img_div">
        <img className="ent-loginpage-img" src={Loginimage} />
      </div>
      <form className="ent-loginpage-loginform">
        <label className="ent-loginpage-email-label">Your Email</label>
        <input
          type="email"
          name="email"
          onChange={change}
          className="ent-loginpage-email"
        />{errors.email && (
          <div className="text-danger errortext">{errors.email}</div>
        )}
        <label className="ent-loginpage-password-label">Password</label>
        <input
          type="password"
          name="password"
          onChange={change}
          className="ent-loginpage-password"
        />{errors.password && (
          <div className="text-danger errortext">{errors.password}</div>
        )}
        <p className="text-center mt-4"><Link to="/entrepreneur/fogot-password">Forgot password</Link></p>
        <p className=""> 
          please register first <Link  to="/entrepreneur/signup">Register</Link>
        </p>
        <button className="ent-loginpage-loginbtn" onClick={HandleClick}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPageMain;

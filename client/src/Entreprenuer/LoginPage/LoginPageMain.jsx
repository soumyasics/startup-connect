import React, { useState } from "react";
import "./LoginPageMain.css";
import Loginimage from "../../assets/Rectangle 10.png";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../BaseAPIs/AxiosInstance";
import Footer from "../../components/Footer/Footer";
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../assets/Frame 40.png";




function LoginPageMain() {

  

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };

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
    <>

<div className="sticky">
        <div className="landingtopheader">
          <div className="landingsecondheader">
            <Navbar className="px-4">
              <Navbar.Brand href="#home" className="text-light">
                <img src={Frame} alt="Frame" />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="px-5">
                  <a href="#Home" className="text-decoration-none">
                    <p className="navbarstext">Home</p>
                  </a>
                </Navbar.Text>
                <Navbar.Text className="px-5">
                  <a href="#About" className="text-decoration-none">
                    <p className="navbarstext">About Us</p>
                  </a>
                </Navbar.Text>
                <Navbar.Text className="px-5">
                  <a href="#Services" className="text-decoration-none">
                    <p className="navbarstext">Services</p>
                  </a>
                </Navbar.Text>
                <Navbar.Text className="px-5" onClick={navigateToLogin}>
                  <p className="navbarstext">Sign Up</p>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    <div className="container">
      <div className="text-center">
            <h4 className="  mt-3  ent_mainheading">LOGIN HERE</h4>
            <h3 className="ent_sub_h3">Your Journey to Success </h3>
            <h3 className="ent_sub_h3">Starts Here</h3>
            <hr
              className="  mb-4 border border-3 border-info"
              style={{ margin: "0 45%" }}
            ></hr>
        </div>
        <div className='row px-4'>
      <div className="col ent_loginpage_img_div">
        <img className="ent_loginpage_img mb-4" src={Loginimage} />
      </div>
      <div className='col mt-5 px-5'>
      <form className="ent_loginform">
        <label className="ent_loginpage_email_label">Your Email</label>
        <input
          type="email"
          name="email"
          onChange={change}
          className="ent_loginpage_email"
        />{errors.email && (
          <div className="text-danger errortext">{errors.email}</div>
        )}

        <label className="ent_loginpage_password_label">Password</label>
        <input
          type="password"
          name="password"
          className="ent_loginpage_password"
        />
        <p className="text mt-2"><Link to="/entrepreneur/fogot-password">Forgot password</Link></p>
        
        <button className="ent_login_loginbtn" >
          Log In
        </button>
        <p className="mt-3 "> 
          please register first <Link  to="/entrepreneur/signup">Register</Link>
        </p>
      </form>
      </div>
      </div>
    </div>
     
        <Footer/>
    </>
  );
}

export default LoginPageMain;

import React,{useState} from "react";
import "./Entsignup.css";
import Entbodyimage from "../../assets/Entregbodyimage.png";
import { useNavigate,Link } from "react-router-dom";
import axiosInstance from "../../BaseAPIs/AxiosInstance";
import Footer from "../../components/Footer/Footer";
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../assets/Frame 40.png";



function Entsignup() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    address: "",
    contact: "",
    image: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    address: "",
    contact: "",
    image: "",
    gender: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
    console.log(files);
  };

  console.log(data,"kkk");


  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    let formValid = true;

    if (!data.fname.trim()) {
      formValid = false;
      errors.fname = "fname is required";
    }
    if (!data.lname.trim()) {
      formValid = false;
      errors.lname = "lname is required";
    }

    if (!data.contact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (data.contact.length < 10) {
      errors.contact = "Enter a valid 10-digit contact number";
    }

    if (!data.address.trim()) {
      formValid = false;
      errors.address = "address is required";
    }

    if (!data.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    } else if (!data.email.endsWith("@gmail.com")) {
      formValid = false;
      errors.email = "Email must be a valid Gmail address";
    }

    if (!data.dob.trim()) {
      formValid = false;
      errors.dob = "dob is required";
    }
    if (!data.gender.trim()) {
      formValid = false;
      errors.gender = "gender is required";
    }

    if (!data.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        data.password
      )
    ) {
      formValid = false;
      errors.password =
        "Password should be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    setErrors(errors);

    console.log(data.image);
    if (
      data.fname &&
      data.lname &&
      data.email &&
      data.dob &&
      data.address &&
      data.gender &&
      data.contact &&
      data.password &&
      data.image
    ) {
      formValid = true;
    }

    if (Object.keys(errors).length === 0 && formValid) {
      const formData = new FormData();

      formData.append("fname", data.fname);
      formData.append("lname", data.lname);
      formData.append("email", data.email);
      formData.append("contact", data.contact);
      formData.append("address", data.address);
      formData.append("gender", data.gender);
      formData.append("dob", data.dob);
      formData.append("password", data.password);
      formData.append("file", data.image);
      try {
        console.log(formData, "formdata");
        var response;
        if (formData) {
          response = await axiosInstance.post(
            "/registerEntrepreneur",
            formData
          );
        }
        console.log("Response:", response);
        // alert("Waiting for Admin approval..");
        // setTimeout(() => {
        //   navigate("/shopownerlogin");
        // }, 1500);
      } catch (error) {
        // console.error("Error:", error);
        // let msg = error?.response?.data?.message || "Error occurred";
        // alert(msg);
      }
    } else {
      // console.log("Form is not valid", formValid);
      // console.log("Data entered", data);
    }
  };
  return (
    <>
    <div className="sticky">
        <div className="landingtopheader">
          <div className="ent_secondheader">
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
      <div className="text-center headr">
          <h4 className="  mt-3  ent_mainheading">REGISTER NOW</h4>
          <h3 className="ent_sub_h3">Access Your World </h3>
          <h3 className="ent_sub_h3">of Innovation</h3>
          <hr
            className="  mb-4 border border-3 border-info"
            style={{ margin: "0 45%" }}
          ></hr>
      </div>
      <form>
      <div className='row'>
        <div className="col">
          <img className='ent_reg_img' src={Entbodyimage}></img>
        </div>
        
          <div className='col-4'>
            <div class="">
            <label id="">First Name</label>
              <input class="input-cal input-base" name="fname" id="ent_input" placeholder="" type="text"/>
            </div>
            <div class=" pt-2 ">
            <label id="">Company Name</label>
              <input class="input-cal input-base" id="ent_input" name="company_name" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Expertise Area</label>
              <select class="input-cal input-base " id="ent_input"  name="expertise_area">
                <option hidden="">Expertise Area</option>
                <option value="Technology">Technology</option>
                <option value="E-commerce and Retail">E-commerce and Retail</option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Finance and Insurance">Finance and Insurance</option>
                <option value="Education">Education</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Media and Entertainment">Media and Entertainment</option>
                <option value="Transportation and Logistics">Transportation and Logistics</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Environmental and Energy">Environmental and Energy</option>
                <option value="Consumer Services">Consumer Services</option>
                <option value="Fashion and Lifestyle">Fashion and Lifestyle</option>
              </select>
            </div>
            <div class=" pt-2 ">
            <label id="">E-Mail ID</label>
              <input class="input-cal input-base" id="ent_input" name="email" placeholder="" type="text"/>
            </div>
            <div class=" pt-2 ">
            <label id="">Contact Number</label>
              <input class="input-cal input-base" id="ent_input" name="contact" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Address</label>
              <input class="input-cal input-base" id="ent_input" name="address" placeholder="" type="text"/>
            </div>
            <label id="">Your Image</label>
            <div class=" relative pt-4 ent_reg_profile ">
              <label for="file" class="ent_reg_file_upload">
                <div class="icon">Upload</div>
                <input id="file" type="file"  name="profile" />
              </label>
            </div>
          </div>
          <div className='col-4'>
            <div class=" ">
            <label id="">Last Name</label>
              <input class="input-cal input-base" id="ent_input" name="lname" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Corporate Identification Number</label>
              <input class="input-cal input-base" id="ent_input" name="corporate_id_number" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Company Description</label>
              <input class="input-cal input-base" id="ent_input" name="description" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Location</label>
               <input class="input-cal input-base" id="ent_input" name="location" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Username</label>
              <input class="input-cal input-base" id="ent_input" name="username" placeholder="" type="text"/>
            </div>
            <div class=" pt-2">
            <label id="">Password</label>
              <input class="input-cal input-base" id="ent_input" name="password" placeholder="" type="password"/>
            </div>
            <div class="relative pt-2">
            <label id="">Confirm Password</label>
              <input class="input-cal input-base" id="ent_input" name="c_password" placeholder="" type="password"/>
            </div>
            <div class="relative pt-2 mx-5 mb-3">
              <button className='ent_reg_btn'>Register</button> 
              </div>
            </div>
           
          </div>
          </form>
          
        
    </div>
    <Footer/>  
    </>
  );
}

export default Entsignup;

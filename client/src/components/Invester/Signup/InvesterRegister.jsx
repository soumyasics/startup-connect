import React, { useState } from 'react'
import './InvesterRegister.css'
import InvestorRegImg from '../../../assets/investor_register.png'
import Footer from '../../Footer/Footer'
import { useNavigate } from "react-router-dom";
import Navbar_2 from '../../commonNavbar/Navbar_2';
import axiosMultipartInstance from '../../../BaseAPIs/AxiosMultipartInstance';


function InvesterRegister() {

  const navigate=useNavigate();

  const [investordata, setInvestordata] = useState({
    name: "",
    email: "",
    contact:"",
    organization:"",
    nationality:"",
    password:"",
    confirm_password:"",
    investing_category: "",
    occupation: "",
    description: "",
    address: "",
    profile:"",
    identification_document: "",
    
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact:"",
    organization:"",
    nationality:"",
    password:"",
    confirm_password:"",
    investing_category: "",
    occupation: "",
    description: "",
    address: "",
    profile:"",
    identification_document: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvestordata({ ...investordata, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setInvestordata({ ...investordata, [name]: files[0],[name]:files[1] });
    console.log(files);
  };

  console.log(investordata,"investor_data_1");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    let formValid = true;

    if (!investordata.name.trim()) {
      formValid = false;
      errors.name = "Name is required";
    }
    if (!investordata.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    } else if (!investordata.email.endsWith("@gmail.com")) {
      formValid = false;
      errors.email = "Email must be a valid Gmail address";
    }
    if (!investordata.contact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (investordata.contact.length <=9) {
      errors.contact = "Enter a valid 10-digit contact number";
    }
    if (!investordata.organization.trim()) {
      formValid = false;
      errors.organization = "Organization is required";
    }
    if (!investordata.nationality.trim()) {
      formValid = false;
      errors.nationality = "Nationality name is required";
    }
    if (!investordata.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        investordata.password
      )
    ) {
      formValid = false;
      errors.password =
        "Password should be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }
    if (!investordata.confirm_password.trim()) {
      formValid = false;
      errors.confirm_password = "Company description is required";
    }else if(investordata.password!==investordata.confirm_password){
      errors.confirm_password="Passwords must match"
    }
    if (!investordata.investing_category.trim()) {
      formValid = false;
      errors.Investing_category = "Investing Category is required";
    }
    if (!investordata.occupation.trim()) {
      formValid = false;
      errors.occupation = "Occupation is required";
    }
    if (!investordata.description.trim()) {
      formValid = false;
      errors.description = "Description is required";
    }
    if (!investordata.address.trim()) {
      formValid = false;
      errors.address = "Address is required";
    }
  
  setErrors(errors);
  
  if(
    investordata.name &&
    investordata.email &&
    investordata.contact &&
    investordata.organization &&
    investordata.nationality &&
    investordata.password &&
    investordata.investing_category &&
    investordata.occupation &&
    investordata.description &&
    investordata.address &&
    investordata.profile &&
    investordata.identification_document 
    ){
      formValid=true;
    }

    if (Object.keys(errors).length === 0 && formValid) {
      
      try {
        console.log(investordata, "formdata");
        var response;
        if (investordata) {
          response = await axiosMultipartInstance.post(
            "/registerInvestor",
            investordata
          );
        }
        console.log("Response:", response); 
        if(response.status==200){
          alert(response.data.msg)
          navigate("/investor/login")
        }
        
      } catch (error) {
        console.error("Error:", error);
        let msg = error?.response?.data?.msg || "Error occurred";
        alert(msg);
      }
    } else {
      console.log("Form is not valid", formValid);
      console.log("Data entered", investordata);
    }
  }


  
  return (
    <>
    <Navbar_2/>
    <div className='container'>
    <div className="text-center ">
          <h4 className="  mt-3  inv_mainheading">REGISTER NOW</h4>
          <h3 className="inv_sub_h3">Access Your World </h3>
          <h3 className="inv_sub_h3">of Innovation</h3>
          <div className="  mb-5  inv_hr_line "></div>

      </div>
      <form onSubmit={(e) =>{handleSubmit(e);}}>
        <div className='row'>
          <div className='col'>
          <img className="inv-reg-img" src={InvestorRegImg}></img>
          </div>
          
          <div className='col'>
            
            <div class="">
            <label id="">Name</label>
              <input class="input-cal input-base" name="name" id="input" onChange={handleInputChange} placeholder="" type="text"/>
              {errors.name && (<div className="text-danger errortext">{errors.name}</div>)}

            </div>
            <div class="   pt-2 inv-reg-email">
              <label id="">E-mail ID</label>
                <input class="input-cal input-base" id="input" name="email" onChange={handleInputChange} placeholder="" type="text"/>
                {errors.email && (<div className="text-danger errortext">{errors.email}</div>)}

              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Contact Number</label>
                <input class="input-cal input-base" id="input" name="contact" onChange={handleInputChange} placeholder="" type="text"/>
                {errors.contact && (<div className="text-danger errortext">{errors.contact}</div>)}

              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Organization</label>
                <input class="input-cal input-base" id="input" name="organization" onChange={handleInputChange} placeholder="" type="text"/>
                {errors.organization && (<div className="text-danger errortext">{errors.organization}</div>)}

              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Nationality</label>
                <input class="input-cal input-base" id="input" name="nationality" onChange={handleInputChange} placeholder="" type="text"/>
                {errors.nationality && (<div className="text-danger errortext">{errors.nationality}</div>)}

              </div>
              <div class=" pt-2 inv-reg-email">
              <label id="">Password</label>
                <input class="input-cal input-base" id="input" name="password" onChange={handleInputChange} placeholder="" type="password"/>
                {errors.password && (<div className="text-danger errortext">{errors.password}</div>)}

              </div>
              <div class=" pt-2">
              <label id="">Confirm Password</label>
                <input class="input-cal input-base" id="input" name="confirm_password" onChange={handleInputChange} placeholder="" type="password"/>
                {errors.confirm_password && (<div className="text-danger errortext">{errors.confirm_password}</div>)}

              </div>
              
            
            </div>
            <div className='col mb-5'>
              <div class="">
              <label id="">Industry Sector</label>
                <select class="input-cal input-base " id="input" onChange={handleInputChange}  name="investing_category">
                  <option hidden="">Industry Sector</option>
                  <option value="Abc">Abc</option>
                  <option value="Def">Def</option>
                  <option value="Ghi">Ghi</option>
                </select>
                {errors.industry_sector && (<div className="text-danger errortext">{errors.industry_sector}</div>)}

                
              </div>
              <div class=" pt-2">
                <label id="">Occupation</label>
                  <input class="input-cal input-base" id="input" onChange={handleInputChange} name="occupation" placeholder="" type="text"/>
                  {errors.occupation && (<div className="text-danger errortext">{errors.occupation}</div>)}

                </div>
              <div class=" pt-2">
                <label id="">Description</label>
                  <input class="input-cal input-base" id="input" onChange={handleInputChange} name="description" placeholder="" type="text"/>
                  {errors.description && (<div className="text-danger errortext">{errors.description}</div>)}

                </div>
              <div class=" pt-2">
                <label id="">Address</label>
                  <input class="input-cal input-base" id="input" onChange={handleInputChange} name="address" placeholder="" type="text"/>
                  {errors.address && (<div className="text-danger errortext">{errors.address}</div>)}

                </div>
              <div className='inv_file_upload1'>
                <label className='pt-3 px-1'>Profile</label>
                  <label for="file" class="int_reg_file_upload">
                    <div class="icon">Upload</div>
                    <input id="file" type="file"  name="profile" onChange={handleFileChange} />
                  </label>
              </div>
            <div className='inv_file_upload2'>
            <label className='pt-3 px-1' placeholder=''>Upload Identification Document</label>
            <label for="file" class="int_reg_file_upload">
                <div class="icon">Upload</div>
                <input id=""  type="file"  name="identification_document" onChange={handleFileChange} />
              </label>
            
            </div>
              <div class="relative pt-4">
              <button className='inv-reg-btn'>Register</button> 
              </div>
            </div>
            
            
          </div>
          
          </form>
          
          

      </div>
    <Footer/>
      </> 

  )
}

export default InvesterRegister
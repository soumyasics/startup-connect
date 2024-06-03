import React from "react";
import "./Entsignup.css";
import Entbodyimage from "../../assets/Entregbodyimage.png";
import { useNavigate } from "react-router-dom";

function Entsignup() {
  const navigate = useNavigate();
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

    if (!data.shopownerpassword.trim()) {
      formValid = false;
      errors.shopownerpassword = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        data.shopownerpassword
      )
    ) {
      formValid = false;
      errors.shopownerpassword =
        "Password should be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    setErrors(errors);

    // console.log(data.shoplisence);
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
        alert("Waiting for Admin approval..");
        setTimeout(() => {
          navigate("/shopownerlogin");
        }, 1500);
      } catch (error) {
        console.error("Error:", error);
        let msg = error?.response?.data?.message || "Error occurred";
        alert(msg);
      }
    } else {
      // console.log("Form is not valid", formValid);
      // console.log("Data entered", data);
    }
  };
  return (
    <div className="mt-5">
      <div className="text-center">
        <p className="Registernow ">Register Now</p>
        <h1 className="Registertopcontent ">Access Your World</h1>
        <h1 className="Registertopcontent"> of Innovation</h1>
        <hr
          className="mb-5 border border-3 border-info"
          style={{ margin: "0 45%" }}
        ></hr>
      </div>
      <div className="pt-3 dummy">
        <div class="row">
          <div class="col-4 p-4 ps-5 p-0">
            <div className="EntRegimage">
              <img src={Entbodyimage} alt="" />
            </div>
          </div>
          <div class="col ">
            <div>
              <div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="First Name"
                    value={data.fname}
                    name="fname"
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    value={data.lname}
                    name="lname"
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Industry Sector"
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="email"
                    value={data.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="E-Mail ID"
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="number"
                    value={data.contact}
                    name="contact"
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    value={data.address}
                    name="address"
                    onChange={handleInputChange}
                    placeholder="Address"
                  />
                </div>
                <div class="input-group  pt-4">
                  <label
                    id="Entsignuploadimage"
                    class="input-group-text ps-5"
                    for="inputGroupFile01"
                  >
                    Your Image
                  </label>
                  <input
                   value={data.image}
                   name="image"
                    type="file"
                    id="Entsignuploadimage"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    value={data.lname}
                    name="lname"
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Corporate Identification Number"
                  />
                </div>

                <div className="pt-4">
                  <input
                    className="Entreginput"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Company Description"

                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entinput ps-3"
                    type="text"
                    placeholder="Industry Sector"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Username"
                  />
                </div>
                
                <div className="pt-4">
                  <input
                    className="Entreginput"
                    type="password"
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-0">
          <div class="col-4 p-0"></div>
          <div class="col-8 text-center">
            <button className="Entregbtn" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entsignup;

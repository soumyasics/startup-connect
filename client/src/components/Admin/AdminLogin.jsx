import React, {useState} from "react";
import AdminLoginimg from "../../assets/undraw_secure_login_pdn4 1.png";
import Frame from "../../assets/Frame 40.png";
import { Link,useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate=useNavigate();

    const [loginData, SetloginData] = useState({email:"",password:""})
    const [errors, setErrors] =useState({email:"",password:""})
  
    const change=(e)=>{
      const {name,value}=e.target;
      SetloginData({...loginData,[name]:value});
    };
    console.log(loginData,"loginData");
    const formValidating=(fieldName,value)=>{
        if(!value.trim()){
          return `${fieldName} is required`;
        }
        if (fieldName === "Email" && !value.endsWith("@gmail.com")){
          return "Email must be a valid Gmail address";
        }
        if(fieldName === "Password"){
          const passwordRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
          if(!passwordRegex.test(value)){
            return "Password must contain at least one number,one special character, and one capital letter"
          }
        }
        return "";
      };

      const handleSubmit=(e)=>{
        e.preventDefault();
        let errors={};
        let formValid=true;
        errors.email=formValidating("Email",loginData.email)
        errors.password=formValidating("Password",loginData.password)
        formValid=false;
        setErrors(errors);
    
        if(loginData.email && loginData.password){
          formValid=true;
        }
    
        if(!errors.email && !errors.password && formValid){
          axiosInstance.post("/loginAdmin",loginData)
    
          .then((result)=>{
            console.log(result,"fulldata");
            if(result.data.status == 200){
              const { data,token }=result.data;
              console.log("id",data._id);
              localStorage.setItem("Admin",data._id);
              localStorage.setItem("AdminToken",token);
              console.log(data);
              alert("Admin Login Successfully");
              navigate("/admin_dashboard")
            }
            else{
              alert(result.data.msg);
            }
          })
          .catch((err)=>{
            console.log(err);
            alert(err);
          });
        }
      };
    
  return (
    <div className="Adminloginmain p-5">
      <div className="row container ">
        <div className="col">
          <div>
            <div className="text-center">
              <img src={Frame}></img>
            </div>
            <div className="adminloginform">
              <form onSubmit={(e)=>{handleSubmit(e);}}>
                <div className="mb-3">
                <div className="text-center ">Login to your account</div>
                  <label for="exampleInputEmail1" className="form-label mt-5">
                    Email 
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="adminlogininput"
                    aria-describedby="emailHelp"
                    onChange={change}
                    name="email"
                  ></input><div className="text-end pt-2"><Link className="text-decoration-none " to="/admin_forgot">Forgot password</Link></div>

                  <label for="exampleInputEmail1" className="form-label ">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control "
                    id="adminlogininput"
                    aria-describedby="emailHelp"
                    onChange={change}
                    name="password"
                  ></input>
                  
                </div>
                <div className="text-center"> <button type="submit" className="btn btn-primary px-5">
                Submit
              </button></div>
               
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <img className="w-100 m-5" src={AdminLoginimg}></img>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

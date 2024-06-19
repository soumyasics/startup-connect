import React,{ useState } from 'react'
import './EditStartUpPlan.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer_2 from '../../components/Footer/Footer_2';
import axiosInstance from '../../BaseAPIs/AxiosInstance';
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar';

function EditStartUpPlan() {

    const [startupdata, setStartupData]=useState({
        companyName: "",
        category: "",
        audience:"",
        workingArea:"",
        domain:"",
        market:"",
        value:"",
        competitor1: "",
        competitor2: "",
        differentiator: "",
        currentStatus: "",
        expectedHelpCategory:"",
        expectedHelp:"",
        equityAmount: "",
      });
      const [errors, setErrors]=useState({
        companyName: "",
        category: "",
        audience:"",
        workingArea:"",
        domain:"",
        market:"",
        value:"",
        competitor1: "",
        competitor2: "",
        differentiator: "",
        currentStatus: "",
        expectedHelpCategory:"",
        expectedHelp:"",
        equityAmount: "",
      });
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/entrepreneur/login");
      };
      useEffect(() => {
        if (localStorage.getItem("Enterprenuertoken") == null && localStorage.getItem("Enterprenuer") == null) {
          navigate("/");
        }
    }, [navigate]);

    const {id}=useParams();
    console.log(id,"id");

    function getData () {
        axiosInstance.post(`/viewStartupPlanById/${id}`)
        .then ((res)=>{
            console.log(res);
            if (res.status === 200){
                setStartupData(res.data.data);
            }
        })
        .catch((err)=>{
            console.log(err);
            alert("Failed to fetch user details")
        });
      }
    useEffect(()=>{
        getData()
      },[id]);

    

    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStartupData({ ...startupdata, [name]: value });
      };

      const handleSubmit=async (e)=>{
        e.preventDefault();
    
        let errors={};
        let formValid=true;
    
        if(!startupdata.companyName.trim()){
            formValid=false;
            errors.companyName="Company Required"
        }
        if(!startupdata.category.trim()){
            formValid=false;
            errors.category="Category Required"
        }
        if(!startupdata.audience.trim()){
            formValid=false;
            errors.audience="Audience Required"
        }
        if(!startupdata.workingArea.trim()){
            formValid=false;
            errors.workingArea="Working Area Required"
        }
        if(!startupdata.domain.trim()){
            formValid=false;
            errors.domain="Domain Required"
        }
        if(!startupdata.market.trim()){
            formValid=false;
            errors.market="Market Required"
        }
        if(!startupdata.value.trim()){
            formValid=false;
            errors.value="Value Required"
        }
        if(!startupdata.competitor1.trim()){
            formValid=false;
            errors.competitor1="Competitor1 Required"
        }
        if(!startupdata.competitor2.trim()){
            formValid=false;
            errors.competitor2="Competitor2 Required"
        }
        if(!startupdata.differentiator.trim()){
            formValid=false;
            errors.differentiator="Differentiator Required"
        }
        if(!startupdata.currentStatus.trim()){
            formValid=false;
            errors.currentStatus="CurrentStatus Required"
        }
        if(!startupdata.expectedHelpCategory.trim()){
            formValid=false;
            errors.expectedHelpCategory="Expected Category Required"
        }
        if(!startupdata.expectedHelp.trim()){
            formValid=false;
            errors.expectedHelp="Expected Required"
        }
        if(!startupdata){
            formValid=false;
            errors.equityAmount="Equity Amount Required"
        }
        setErrors(errors);
    
        if(
            startupdata.companyName &&
            startupdata.category &&
            startupdata.audience &&
            startupdata.workingArea &&
            startupdata.domain &&
            startupdata.market &&
            startupdata.value &&
            startupdata.competitor1 &&
            startupdata.competitor2 &&
            startupdata.differentiator &&
            startupdata.currentStatus &&
            startupdata.expectedHelpCategory &&
            startupdata.expectedHelp &&
            startupdata.equityAmount
        ){
            formValid=true;
        }
        if(Object.keys(errors).length === 0 && formValid){
            try {
              var response;
              if (startupdata) {
                response = await axiosInstance.post(
                  `/editStartupPlanById/${id}`,
                  startupdata
                );
              }
              console.log("Response:", response); 
              if(response.status==200){
                alert(response.data.msg)
                navigate("/entrepreneur/viewstartup_plan")
              }
              
            } catch (error) {
              console.error("Error:", error);
              let msg = error?.response?.data?.msg || "Error occurred";
              alert(msg);
            }
          } else {
            console.log("Form is not valid", formValid);
            console.log("Data entered", startupdata);
          }
      }
  return (
    <>
        <CommonNavbar/>
        <HomepageNavbar/>
        <section className='container'>
        <div className="text-center headr">
            <h4 className="  mt-3  startupplan_edit_mainheading"> CREATE YOUR STARTUP</h4>
            <h3 className="startupplan_edit_sub_h3">Your Journey to Success </h3>
            <h3 className="startupplan_edit_sub_h3">Starts Here</h3>
            <div className="  mb-5  startupplan_edit_hr_line"></div>

        </div>
        <form onSubmit={(e) =>{handleSubmit(e);}}>
        <div className='row'>
            <div className='col column1'>
                <label className='px-2'>My Company Name</label>
                    <input class="startupplan_edit_input" 
                    name="companyName"  
                    placeholder={startupdata.companyName} 
                    value={startupdata.companyName}
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.companyName && (<div className="text-danger errortext">{errors.companyName}</div>)}
                <label className='mt-5 px-2'>Audience</label>
                    <input class="startupplan_edit_input" 
                    name="audience"  
                    placeholder={startupdata.audience} 
                    value={startupdata.audience}
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.audience && (<div className="text-danger errortext">{errors.audience}</div>)}
                <label className='mt-5 px-2'>Domain</label>
                    <input class="startupplan_edit_input" 
                    name="domain"  
                    placeholder={startupdata.domain} 
                    value={startupdata.domain} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.domain && (<div className="text-danger errortext">{errors.domain}</div>)}
                <label className='mt-5 px-2'>Value</label>
                    <input class="startupplan_edit_input " 
                    name="value"  
                    placeholder={startupdata.value} 
                    value={startupdata.value} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.value && (<div className="text-danger errortext">{errors.value}</div>)}
                <label className='mt-5 px-2'>Competitor 2</label>
                    <input class="startupplan_edit_input" 
                    name="competitor2"  
                    placeholder={startupdata.competitor2} 
                    value={startupdata.competitor2}
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.competitor2 && (<div className="text-danger errortext">{errors.competitor2}</div>)}
                <label className='mt-5 px-2'>Current Status</label>
                    <input class="startupplan_edit_input" 
                    name="currentStatus"  
                    placeholder={startupdata.currentStatus} 
                    value={startupdata.currentStatus} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.currentStatus && (<div className="text-danger errortext">{errors.currentStatus}</div>)}
                <label className='mt-5 px-2'>Expected Help</label>
                    <input class="startupplan_edit_input" 
                    name="expectedHelp"  
                    placeholder={startupdata.expectedHelp} 
                    value={startupdata.expectedHelp} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.expectedHelp && (<div className="text-danger errortext">{errors.expectedHelp}</div>)}
            </div>
            <div className='col column2'>
                <label className='px-2'>Category</label>
                    <select class="startupplan_edit_input"   name="category" placeholder={startupdata.category} 
                    value={startupdata.category} onChange={handleInputChange}>
                    <option hidden="">Categories</option>
                    <option value="Abc">Abc</option>
                    <option value="Def">Def</option>
                    <option value="Ghi">Ghi</option>
                    </select>
                    {errors.category && (<div className="text-danger errortext">{errors.category}</div>)}
                <label className='mt-5 px-2'>Working Area</label>
                    <input class="startupplan_edit_input" 
                    name="workingArea"  
                    placeholder={startupdata.workingArea} 
                    value={startupdata.workingArea} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.workingArea && (<div className="text-danger errortext">{errors.workingArea}</div>)}
                <label className='mt-5 px-2'>Market</label>
                    <input class="startupplan_edit_input" 
                    name="market"  
                    placeholder={startupdata.market} 
                    value={startupdata.market} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.market && (<div className="text-danger errortext">{errors.market}</div>)}
                <label className='mt-5 px-2'>Competitor 1</label>
                    <input class="startupplan_edit_input" 
                    name="competitor1"  
                    placeholder={startupdata.competitor1} 
                    value={startupdata.competitor1} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.competitor1 && (<div className="text-danger errortext">{errors.competitor1}</div>)}
                <label className='mt-5 px-2'>Differentiator</label>
                    <input class="startupplan_edit_input" 
                    name="differentiator"  
                    placeholder={startupdata.differentiator} 
                    value={startupdata.differentiator} 
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.differentiator && (<div className="text-danger errortext">{errors.differentiator}</div>)}
                <label className='mt-5 px-2'>Expected Help Category</label>
                    <input class="startupplan_edit_input" 
                    name="expectedHelpCategory"  
                    placeholder={startupdata.expectedHelpCategory} 
                    value={startupdata.expectedHelpCategory}
                    type="text"
                    onChange={handleInputChange}/>
                    {errors.expectedHelpCategory && (<div className="text-danger errortext">{errors.expectedHelpCategory}</div>)}
                <label className='mt-5 px-2'>Equity Amount</label>
                    <input class="startupplan_edit_input" 
                    name="equityAmount"  
                    placeholder={startupdata.equityAmount} 
                    value={startupdata.equityAmount} 
                    type="number"
                    onChange={handleInputChange}/>
                    {errors.equityAmount && (<div className="text-danger errortext">{errors.equityAmount}</div>)}
            </div>
        </div>
        
            <div className='startupplan_edit_btn_div'>
                <button className='startupplan_edit_btn'>Update</button> 
            </div>
            </form>
    </section>
    <Footer_2/>
    </>
  )
}

export default EditStartUpPlan
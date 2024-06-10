import React from 'react'
import './PitchMyIdea.css'
import { useNavigate } from "react-router-dom";
import StartupLogo from "../../assets/Frame 40.png";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer/Footer"



function PitchMyIdea() {
    const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };
  return (
    <>
    <div className="pmi_sticky">
        <div className="pmi_navbar_white">
                <Navbar className="px-4">
                        <Navbar.Brand href="#home" className="text-light">
                            <img src={StartupLogo} className="pmi_startup_logo" alt="StartupLogo" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="px-3">
                            <a href="#Home" className="text-decoration-none" ><p className="navbarstext">Home</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3">
                            <a href="#About" className="text-decoration-none" ><p className="navbarstext">Investors</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3">
                            <a href="#Services" className="text-decoration-none" ><p className="navbarstext">Mentors</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3">
                            <a href="#Services" className="text-decoration-none" ><p className="navbarstext">Startup Plan</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3">
                            <a href="#Services" className="text-decoration-none" ><p className="navbarstext">My Profile</p></a>
                            </Navbar.Text>
                            <Navbar.Text className="px-3" onClick={navigateToLogin}>
                            <a href="#Services" className="text-decoration-none" ><p className="navbarstext">Logout</p></a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Navbar>
            
        </div>
    </div>
    <section className='container'>
        <div className="text-center headr">
            <h4 className="  mt-3  pmi_mainheading"> CREATE YOUR STARTUP</h4>
            <h3 className="pmi_sub_h3">Your Journey to Success </h3>
            <h3 className="pmi_sub_h3">Starts Here</h3>
            <div className="  mb-5  pmi_hr_line"></div>

        </div>
        <div className='row'>
            <div className='col column1'>
                <label >My Company Name</label>
                    <input class="pmi_input" name="name"  placeholder="Name of the company" type="text"/>
                <label className='mt-5'>To help</label>
                    <input class="pmi_input" name="name"  placeholder="A defined audience" type="text"/>
                <label className='mt-5'>With</label>
                    <input class="pmi_input" name="name"  placeholder="Secret sauce" type="text"/>
                <label className='mt-5'>Which last year was a</label>
                    <input class="pmi_input " name="name"  placeholder="Defined value" type="text"/>
                <label className='mt-5'>Competitor 2</label>
                    <input class="pmi_input" name="name"  placeholder="Competitor 2" type="text"/>
                <label className='mt-5'>Currently we have</label>
                    <input class="pmi_input" name="name"  placeholder="Current state of product/team" type="text"/>
                <label className='mt-5'>To help us</label>
                    <input class="pmi_input" name="name"  placeholder="What you would do with the ask" type="text"/>
            </div>
            <div className='col column2'>
                <label>Is developing</label>
                    <select class="pmi_input"   name="name" placeholder="">
                    <option hidden="">Categories</option>
                    <option value="Abc">Abc</option>
                    <option value="Def">Def</option>
                    <option value="Ghi">Ghi</option>
                    </select>
                <label className='mt-5'>To solve</label>
                    <input class="pmi_input" name="name"  placeholder="Solve a problem" type="text"/>
                <label className='mt-5'>We compete in the growing</label>
                    <input class="pmi_input" name="name"  placeholder="Defined market" type="text"/>
                <label className='mt-5'>We are similar to competitor 1</label>
                    <input class="pmi_input" name="name"  placeholder="Competitor 1" type="text"/>
                <label className='mt-5'>But we</label>
                    <input class="pmi_input" name="name"  placeholder="One key differentiator" type="text"/>
                <label className='mt-5'>We are looking for</label>
                    <input class="pmi_input" name="name"  placeholder="The ask" type="text"/>
                <label className='mt-5'>In exchange of</label>
                    <input class="pmi_input" name="name"  placeholder="Amount of equity offering" type="text"/>
            </div>
        </div>
            <div className='pmi_btn_div'>
                <button className='pmi_btn'>Pitch My Idea</button> 
            </div>
    </section>
    <Footer/>
    
    </>
  )
}

export default PitchMyIdea
import React from 'react'
import './PitchMyIdea.css'
import { useNavigate } from "react-router-dom";
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Footer_2 from '../../components/Footer/Footer_2';



function PitchMyIdea() {
    const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };
  return (
    <>
    <HomepageNavbar/>
    <section className='container'>
        <div className="text-center headr">
            <h4 className="  mt-3  pmi_mainheading"> CREATE YOUR STARTUP</h4>
            <h3 className="pmi_sub_h3">Your Journey to Success </h3>
            <h3 className="pmi_sub_h3">Starts Here</h3>
            <div className="  mb-5  pmi_hr_line"></div>

        </div>
        <div className='row'>
            <div className='col column1'>
                <label className='px-2'>My Company Name</label>
                    <input class="pmi_input" name="name"  placeholder="Name of the company" type="text"/>
                <label className='mt-5 px-2'>Audience</label>
                    <input class="pmi_input" name="name"  placeholder="A defined audience" type="text"/>
                <label className='mt-5 px-2'>Domain</label>
                    <input class="pmi_input" name="name"  placeholder="Secret sauce" type="text"/>
                <label className='mt-5 px-2'>Value</label>
                    <input class="pmi_input " name="name"  placeholder="Defined value" type="text"/>
                <label className='mt-5 px-2'>Competitor 2</label>
                    <input class="pmi_input" name="name"  placeholder="Competitor 2" type="text"/>
                <label className='mt-5 px-2'>Current Status</label>
                    <input class="pmi_input" name="name"  placeholder="Current state of product/team" type="text"/>
                <label className='mt-5 px-2'>Expected Help</label>
                    <input class="pmi_input" name="name"  placeholder="What you would do with the ask" type="text"/>
            </div>
            <div className='col column2'>
                <label className='px-2'>Category</label>
                    <select class="pmi_input"   name="name" placeholder="">
                    <option hidden="">Categories</option>
                    <option value="Abc">Abc</option>
                    <option value="Def">Def</option>
                    <option value="Ghi">Ghi</option>
                    </select>
                <label className='mt-5 px-2'>Working Area</label>
                    <input class="pmi_input" name="name"  placeholder="Solve a problem" type="text"/>
                <label className='mt-5 px-2'>Market</label>
                    <input class="pmi_input" name="name"  placeholder="Defined market" type="text"/>
                <label className='mt-5 px-2'>Competitor 1</label>
                    <input class="pmi_input" name="name"  placeholder="Competitor 1" type="text"/>
                <label className='mt-5 px-2'>Differentiator</label>
                    <input class="pmi_input" name="name"  placeholder="One key differentiator" type="text"/>
                <label className='mt-5 px-2'>Expected Help Category</label>
                    <input class="pmi_input" name="name"  placeholder="The ask" type="text"/>
                <label className='mt-5 px-2'>Equity Amount</label>
                    <input class="pmi_input" name="name"  placeholder="Amount of equity offering" type="text"/>
            </div>
        </div>
            <div className='pmi_btn_div'>
                <button className='pmi_btn'>Pitch My Idea</button> 
            </div>
    </section>
    <Footer_2/>
    
    </>
  )
}

export default PitchMyIdea
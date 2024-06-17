import React from 'react'
import './ViewInvestors.css'
import { CommonNavbar } from '../../components/commonNavbar/commonNavbar'
import HomepageNavbar from '../../components/commonNavbar/HomepageNavbar'
import Investor1 from '../../assets/Investor1.png'
import Footer from '../../components/Footer/Footer'

function InvestorsView() {
  return (
    <>
    <CommonNavbar/>
    <HomepageNavbar/>
      <div className="container mb-4">
        <div className="text-center ">
            <h4 className="  mt-3  ent_invview_mainheading">TOP INVESTORS</h4>
            <h3 className="ent_invview_sub_h3">Your Ideas, Our Mission</h3>
            <div className="  mb-5  ent_invview_hr_line "></div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ent_invview_profile">
              <img src={Investor1} class="ent_invview_profile_pic" alt="..."/>
              <div class="">
                <h5 class="ent_invview_fname">Full Name</h5>
                <h3 className='ent_invview_name'>INVESTOR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default InvestorsView
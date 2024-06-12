import React from "react";
import "./LandingPageTopNav.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import Frame from "../assets/Frame 40.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import why_choose_img1 from "../assets/why_choose_img1.png";
import why_choose_img2 from "../assets/why_choose_img2.png";
import why_choose_img3 from "../assets/why_choose_img3.png";
import why_choose_img4 from "../assets/why_choose_img4.png";
import our_service_img1 from "../assets/our_service_img1.png";
import our_service_img2 from "../assets/our_service_img2.png";
import our_service_img3 from "../assets/our_service_img3.png";
import our_service_img4 from "../assets/our_service_img4.png";
import our_service_img5 from "../assets/our_service_img5.png";
import our_service_img6 from "../assets/our_service_img6.png";

import img7 from "../assets/img7.png";

import Footer from "../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import carousel2 from "../assets/carousel-2.jpg";
import Button from "react-bootstrap/Button";
function LandingPageTopNav() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };

  return (
    <>
      <div>
        <nav className="navbar NavTopBg">
          <div className="positionTonav">
            <svg
              id="TopNavLocationLogo"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <a className="navbar-brand Topnavlocationaddress">
              123 Street New York, USA
            </a>
            <svg
              id="Topnavphonelogo"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <a className="Topnavconatctnumber">+012 345 6789</a>
            <svg
              id="Topnavemaillogo"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-open-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
            </svg>
            <a className="Topnavemailadress">Info@examplie.com</a>
            <a>
              <AiFillTwitterCircle id="Topnavtwiterlogo" />
            </a>
            <a>
              <FaFacebook id="Topnavfacebooklogo" />
            </a>
            <a>
              <TiSocialLinkedinCircular id="Topnavlilogo" />
            </a>
            <a>
              <CiInstagram id="Topnavinstalogo" />
            </a>
            <a>
              <IoLogoYoutube id="Topnavyoutubelogo" />
            </a>
          </div>
        </nav>
      </div>
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
                  <a href="" className="text-decoration-none"><p className="navbarstext">Sign In</p></a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      <div className="landingpagemaindiv" id="Home">
        <div className="hero_text">
          "Turning Vision into Reality: Where Innovative Ideas Meet Relentless Execution"
        <div>
          <button className="hero_contact_btn">Contact Us</button>
        </div>
        </div>

        

      </div>
      <div className="container landingpagemainseconddiv">
        <div className="row">
          <div className="col-4 landingpagemainseconddiv1 p-5">
            <div className="row">
              <div className="col-3">
                <img src={img1} alt="Happy Entrepreneurs" />
              </div>
              <div className="col-8">
                <span className="hero_span">Happy Entrepreneurs</span>
                <h4 className="hero_h4_number">12345</h4>
              </div>
            </div>
          </div>
          <div className="col-4 landingpagemainseconddiv2 p-5">
            <div className="row">
              <div className="col-3">
                <img src={img2} alt="Services Provide" />
              </div>
              <div className="col-8">
                <span className="hero_span">Services Provide</span>
                <h4 className="hero_h4_number">12345</h4>
              </div>
            </div>
          </div>
          <div className="col-4 landingpagemainseconddiv1 p-5">
            <div className="row">
              <div className="col-3">
                <img src={img7} alt="Branches" className="branches_img"/>
              </div>
              <div className="col-8">
                <span className="hero_span">Branches</span>
                <h4 className="hero_h4_number">12345</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="row" id="aboutsection">
          <div className="col-6" id="About">
            <h3 className="aboutusheading">ABOUT US</h3>
            <h2 className="aboutus_h2">
              Empowering Entrepreneurs to <br></br>Innovate and Grow
            </h2>
            <p className="mt-5 aboutus_p">
            At application, we are dedicated to empowering entrepreneurs to transform their innovative ideas into thriving businesses. Our mission is to provide comprehensive support and resources to help startups succeed in today's competitive landscape.
            </p>

            <div className="row pt-3">
              <h4 className="range_of_service">We offer a wide range of services, including:</h4>
              <div className="col-6 pt-2">
                <div>
                  {" "}
                  <img src={img3} className="range_of_service_img"></img>
                  <span className="ms-1 range_of_service_span">Startup Registration & Support</span>
                </div>
                <div className="mt-4">
                  {" "}
                  <img src={img3} className="range_of_service_img"></img>
                  <span className="ms-3 range_of_service_span">Mentorship & Guidance</span>
                </div>
                <div className="row mt-5">
                  <div className="col-3">
                    {" "}
                    <img src={img5}></img>
                  </div>
                  <div className="col-8">
                    {" "}
                    <span className="range_of_service_span">Call to ask any question</span>
                    <h6 className="text-info">+1234567789</h6>
                  </div>
                </div>
              </div>

              <div className="col-6 pt-2">
                <div>
                  {" "}
                  <img src={img3} className="range_of_service_img"></img>
                  <span className="ms-3 range_of_service_span">24/7 Support</span>
                </div>
                <div className="mt-4">
                  {" "}
                  <img src={img3} className="range_of_service_img"></img>
                  <span className="ms-3 range_of_service_span">Investment Tracking</span>
                </div>
              </div>
              
            </div>  
         
          
        </div>
        <div className="col-6 mt-5">
            <img className="about_img" src={img4}></img>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="  text-center">
            <h4 className="  mt-5 pt-5 mainheadings"> WHY CHOOSE US</h4>
            <h3 className="why_choose_sub_h3">We Are Here to Grow Your </h3>
            <h3 className="why_choose_sub_h3">Business Exponentially</h3>
            <div className="  mb-5  hr_line "></div>
          </div>
          <div className="row">
            <div className="col">
              <img src={why_choose_img1} className="why_choose_img"></img>
                <h4 className="why_choose_heading">Startup Registration & Support</h4>
                <p className="why_choose_p">
                  Guiding you through the process of establishing and legally structuring your business.
                </p>
              <img className="mt-5 why_choose_img" src={why_choose_img3}></img>
                <h4 className="why_choose_heading">Mentorship & Guidance</h4>
                  <p className="why_choose_p">
                    Connecting you with experienced mentors who offer valuable insights and advice to navigate the challenges of entrepreneurship.
                  </p>
            </div>
            <div className="col">
              <img src={img6}></img>
            </div>
            <div className="col">
             <img src={why_choose_img2} className="why_choose_img"></img>
              <h4 className="why_choose_heading">Investment Tracking</h4>
              <p className="why_choose_p">
              Helping you monitor and manage your investments to maximize growth and profitability.
              </p>
              <img className="mt-5 why_choose_img" src={why_choose_img4}></img>
              <h4 className="why_choose_heading">24/7 Support</h4>
              <p className="why_choose_p">
              Providing round-the-clock assistance to ensure your startup's needs are met at any time.
            </p>
            </div>
            </div>
          </div>
        
        
        
      </section>

      <section id="Services">
        <div className="container">
          <div className="  text-center">
            <h4 className=" mt-5 pt-5 mainheadings ">OUR SERVICES</h4>
            <h3 className="our_service_sub_h3">Bridging the Gap Between </h3>
            <h3 className="our_service_sub_h3">Ideas and Success</h3>
            <div className="  mb-5  hr_line "></div>
          </div>
          <div className="row text-center">
            <div className="col p-5 m-5 our_service_card">
              <img src={our_service_img1} className="our_service_img"></img>
              <h6 className="our_service_heading">Security and Privacy</h6>
              <p className="our_service_p">
              We prioritize the safety and confidentiality of your data, ensuring robust security measures to protect your business.
              </p>
            </div>
            <div className="col p-5 m-5 our_service_card">
              <img src={our_service_img2} className="our_service_img" ></img>
              <h6 className="our_service_heading">Analytics and Reporting</h6>
            <p className="our_service_p">
              Gain valuable insights with our comprehensive analytics and reporting tools, designed to drive informed decision-making.
              </p>
            </div>

            <div className="col p-5 m-5 our_service_card">
              <img src={our_service_img3} className="our_service_img"></img>
              <h6 className="our_service_heading">Entrepreneur Guidance</h6>
              <p className="our_service_p">
              Receive expert guidance tailored to your unique entrepreneurial journey, helping you navigate challenges and seize opportunities.
              </p>
          </div>
          </div>

          <div className="row  text-center">
            <div className="col p-5 m-5 our_service_card">
              <img src={our_service_img6} className="our_service_img"></img>
              <h6 className="our_service_heading">Direct Communication</h6>
              <p className="our_service_p">
              Maintain clear and effective communication channels, fostering seamless collaboration and efficient problem-solving.
              </p>
            </div>
            <div className="col-3 p-5 m-5 our_service_card">
              <img src={our_service_img5} className="our_service_img"></img>
              <h6 className="our_service_heading">Investment Tracking</h6>
              <p className="our_service_p">
              Monitor and manage your investments with precision, optimizing your financial strategies for maximum growth.
              </p>
            </div>
            
            <div className="col-3 p-5 m-5 our_service_card">
              <img src={our_service_img4} className="our_service_img"></img>
              <h6 className="our_service_heading">Investment Opportunities</h6>
              <p className="our_service_p">
              Explore and capitalize on lucrative investment opportunities to fuel your business expansion and success.
              </p>
              
            </div>
          
        </div>
        
      </div>
      
      </section>
      <Footer />
    </>
  );
}

export default LandingPageTopNav;
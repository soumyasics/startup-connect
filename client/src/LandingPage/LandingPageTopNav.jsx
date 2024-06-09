import React from "react";
import "./LandingPageTopNav.css";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import Frame from "../assets/Frame 40.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import Footer from "../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import location from '../assets/locationlogo.png'
import Phonelogo from '../assets/Navphonelogo.png'
import navemaillogo from '../assets/Navemaillogo.png'
import twilogo from '../assets/Navtwilogo.png'
import Navfacelogo from '../assets/Navfacelogo.png'
import linkedlogo from '../assets/Navlinlogo.png'
import youlogo from '../assets/Navyoulogo.png'
import Nav from 'react-bootstrap/Nav';
function LandingPageTopNav() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };

  return (

    <>

            
<Navbar className="NavTop-Bg">
<div className='container-fluid'>
    <Navbar.Brand className="ps-3">
            <img src={location} alt=""/>
            <span className="Landing_topnav_address ps-2"> 123 Street New York, USA</span>
            <img className="ps-2" src={Phonelogo} alt=""/>
            <span className="Landing_topnav_address ps-2">+012 345 6789</span>
            <img  className="ps-2" src={navemaillogo} alt=""/>
            <span className="Landing_topnav_address ps-2">Info@examplie.com</span>

        
    </Navbar.Brand>
    <Nav className="">
      <img className="pe-3" src={twilogo} alt=""/>
      <img className="pe-3" src={Navfacelogo} alt=""/>
      <img className="pe-3" src={linkedlogo} alt=""/>
      <img className="pe-3" src={twilogo} alt=""/>
      <img className="pe-3"src={youlogo} alt=""/>

          
        
        
    </Nav>
</div>
</Navbar>

      {/* <div>
        <nav className="navbar NavTopBg">
          <div className="container positionTonav">
            <img src={location} alt=""/>
            <span className="text-light"> 123 Street New York, USA</span>
            <img  src={Phonelogo} alt=""/>
            <span className="text-light">+012 345 6789</span>
            <img  src={navemaillogo} alt=""/>
            <span className="text-light">Info@examplie.com</span>

            <img src={twilogo} alt=""/>

          
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
      </div> */}
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
                  <a href="#Home" className="text-decoration-none" ><p className="navbarstext">Home</p></a>
                </Navbar.Text>
                <Navbar.Text className="px-5">
                  <a href="#About" className="text-decoration-none" ><p className="navbarstext">About Us</p></a>
                </Navbar.Text>
                <Navbar.Text className="px-5">
                  <a href="#Services" className="text-decoration-none" ><p className="navbarstext">Services</p></a>
                </Navbar.Text>
                <Navbar.Text className="px-5" onClick={navigateToLogin}>
                <p className="navbarstext">Sign Up</p>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      <div className="landingpagemaindiv" id="Home">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://themewagon.github.io/startup2/img/carousel-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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
                <span>Happy Entrepreneurs</span>
                <h4>12345</h4>
              </div>
            </div>
          </div>
          <div className="col-4 landingpagemainseconddiv2 p-5">
            <div className="row">
              <div className="col-3">
                <img src={img2} alt="Services Provide" />
              </div>
              <div className="col-8">
                <span>Services Provide</span>
                <h4>12345</h4>
              </div>
            </div>
          </div>
          <div className="col-4 landingpagemainseconddiv1 p-5">
            <div className="row">
              <div className="col-3">
                <img src={img3} alt="Branches" />
              </div>
              <div className="col-8">
                <span>Branches</span>
                <h4>12345</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="row" id="aboutsection">
          <div className="col-6 mt-5 pt-5" id="About">
            <h3 className="aboutusheading">ABOUT US</h3>
            <h2>
              Empowering Entrepreneurs to <br></br>Innovate and Grow
            </h2>
            <p className="mt-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>

            <div className="row ">
              <div className="col-6">
                <div>
                  {" "}
                  <img src={img3} className=""></img>
                  <span className="ms-3">Startup Registration & Support</span>
                </div>
                <div className="mt-4">
                  {" "}
                  <img src={img3}></img>
                  <span className="ms-3">Mentorship & Guidance</span>
                </div>
                <div className="row mt-5">
                  <div className="col-3">
                    {" "}
                    <img src={img5}></img>
                  </div>
                  <div className="col-8">
                    {" "}
                    <span>Call to ask any question</span>
                    <h6 className="text-info">+1234567789</h6>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div>
                  {" "}
                  <img src={img3} className=""></img>
                  <span className="ms-3">24/7 Support</span>
                </div>
                <div className="mt-4">
                  {" "}
                  <img src={img3}></img>
                  <span className="ms-3">Investment Tracking</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5 pt-5">
            <div className="about2"></div>
            <img className="ms-4" src={img4}></img>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 pt-5">
          <div className="  text-center">
            <h4 className="  mt-5 pt-5 mainheadings"> WHY CHOOSE US</h4>
            <h3>We Are Here to Grow Your </h3>
            <h3>Business Exponentially</h3>
            <hr
              className="  mb-5 border border-3 border-info"
              style={{ margin: "0 45%" }}
            ></hr>
          </div>
          <div className="row">
            <div className="col-4">
              <img></img>
              <h4>Startup Registration & Support</h4>
              <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam
                dolor
              </p>
              <img className="mt-5"></img>
              <h4>Mentorship & Guidance</h4>
              <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam
                dolor
              </p>
            </div>
            <div className="col-4">
              <img src={img6}></img>
            </div>
            <div className="col-4">
              <img></img>
              <h4>Investment Tracking</h4>
              <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam
                dolor
              </p>
              <img className="mt-5"></img>
              <h4>24/7 Support</h4>
              <p>
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam
                dolor
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Services" className="mt-5 pt-5">
        <div className="container">
          <div className="  text-center">
            <h4 className=" mt-5 pt-5 mainheadings ">OUR SERVICES</h4>
            <h3>Bridging the Gap Between </h3>
            <h3>Ideas and Success</h3>
            <hr
              className="mb-5 border border-3 border-info"
              style={{ margin: "0 45%" }}
            ></hr>
          </div>
          <div className="row text-center">
            <div className="col-3 p-5 m-5 minddlecard">
              <img></img>
              <h6>Security and Privacy</h6>
              <p>
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
            </div>
            <div className="col-3 p-5 m-5 minddlecard">
              <img></img>
              <h6>Analytics and Reporting</h6>

              <p>
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
            </div>
            <div className="col-3 p-5 m-5 minddlecard">
              <img></img>
              <h6>Entrepreneur Guidance</h6>
              <p>
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-3 p-5 m-5 minddlecard">
              <img></img>
              <h6>Security and Privacy</h6>
              <p>
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
            </div>
            <div className="col-3 p-5 m-5 minddlecard">
              <img></img>
              <h6>Analytics and Reporting</h6>

              <p>
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
            </div>
            <div className="col-3 p-5 m-5 minddlecard">
              <img></img>
              <h6>Entrepreneur Guidance</h6>
              <p>
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
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





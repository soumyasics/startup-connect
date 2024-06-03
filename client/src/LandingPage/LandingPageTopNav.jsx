import React from "react";
import "./LandingPageTopNav.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import Container from "react-bootstrap/Container";
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
function LandingPageTopNav() {
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/entrepreneur/login')
  }
  return (
    <>
      <div>
        <div>
          <nav className="navbar NavTopBg ">
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
                  fill-rule="evenodd"
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
              <a className="Topnavemailadress">Info@examplie .com</a>
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
        <div>
          <div>
            <div className="landingsecondheader ">
              <Navbar className="px-4">
                <Navbar.Brand href="#home " className="text-light">
                  <img src={Frame}></img>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text className="px-5">Home</Navbar.Text>
                  <Navbar.Text className="px-5">About Us</Navbar.Text>
                  <Navbar.Text className="px-5">Services</Navbar.Text>
                  <Navbar.Text className="px-5" onClick={navigateToLogin}>Sign In</Navbar.Text>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
        <div className="landingpagemaindiv">
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
                  alt="..sdfsvfdsg"
                ></img>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt=".dfgfdg.."></img>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..dfg."></img>
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
          <div className="row ">
            <div className="col-4 landingpagemainseconddiv1 p-5">
              <div className="row">
                <div className="col-3">
                  {" "}
                  <img src={img1}></img>
                </div>
                <div className="col-8">
                  {" "}
                  <span>Happy Entrepreneurs</span>
                  <h4>12345</h4>
                </div>
              </div>
            </div>
            <div className="col-4 landingpagemainseconddiv2 p-5">
              <div className="row">
                <div className="col-3">
                  {" "}
                  <img src={img2}></img>
                </div>
                <div className="col-8">
                  {" "}
                  <span>Projects Done</span>
                  <h4>12345</h4>
                </div>
              </div>
            </div>
            <div className="col-4 landingpagemainseconddiv1 p-5">
              <div className="row">
                <div className="col-3">
                  {" "}
                  <img src={img2}></img>
                </div>
                <div className="col-8">
                  {" "}
                  <span> Investors Meet</span>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <section className="container">
          <div className="row">
            <div className="col-6 mt-5 pt-5">
              <h3 className="aboutusheading ">ABOUT US</h3>
              <h2>
                Empowering Entrepreneurs to <br></br>Innovate and Grow
              </h2>
              <p className="mt-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>

              <div className="row mt-5">
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
          <div className="container">
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
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
                <img className="mt-5"></img>
                <h4>Mentorship & Guidance</h4>
                <p>
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
              <div className="col-4">
                <img src={img6}></img>
              </div>
              <div className="col-4">
                <img></img>
                <h4>Investment Tracking</h4>
                <p>
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
                <img className="mt-5"></img>
                <h4>24/7 Support</h4>
                <p>
                  Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                  diam dolor
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
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
      </div>
      <Footer />
    </>
  );
}

export default LandingPageTopNav;

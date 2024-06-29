import React from "react";
import "./Footer.css";
import startuplog from "../../assets/startuplogo.png";
import Adresslogo from "../../assets/adress.png";
import Phonelogo from "../../assets/phone.png";
import Arrowlogo from "../../assets/arrowlogo.png";
import Twiterlogo from "../../assets/twiterlogo.png";
import Facebooklogo from "../..//assets/facebooklogo.png";
import Linkedinlogo from "../../assets/linkedinlogo.png";
import Instalogo from "../../assets/Group 19 (1).png";
import Emaillogo from "../../assets/Vector.png";

function Footer() {
  return (
    <div>
      <div class="firstcolumn ">
        <img className="startuplogo" src={startuplog} />
        <p className="firstcolumnpara ">
          we combine technical expertise with creative thinking to deliver
          innovative solutions that exceed our clients' expectations. We take a
          collaborative approach to every project, working closely with our
          clients to understand their unique goals and challenges and tailor our
          solutions to meet their specific needs.
        </p>
      </div>
      <div className="footerbg ">
        <div className="foot">
          <div class="row  pt-4 ">
            <div class="col-3 secondcolumn  ">
              <div>
                <div className="text-center">
                  <h1 className="secondcolumncontent text-center">
                    Get In Touch
                  </h1>
                  <div className=" mb-3 footer_hr_line1"></div>
                  <div>
                    <div className="secondcolumnadress  ">
                      <div>
                        <img className="px-1" src={Adresslogo} />
                        <span>123 Street, New York,USA</span>
                      </div>
                      <div className="pt-3">
                        <img className="px-2 email_footer" src={Emaillogo} />
                        <span>info@example.com</span>
                      </div>
                      <div className="pt-3">
                        <img className="px-2" src={Phonelogo} />
                        <span>+012 345 67890</span>
                      </div>
                      <div className="mt-2 mx-2">
                        <img className="me-1" src={Twiterlogo} />
                        <img className="me-1" src={Facebooklogo} />
                        <img className="" src={Linkedinlogo} />
                        <img className="" src={Instalogo} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div>
                <div>
                  <h1 className="secondcolumncontent text-center">
                    Quick Links
                  </h1>
                  <div className=" mb-3 footer_hr_line2"></div>
                  <div>
                    <div className="thirdcolumnadress">
                      <ul className="footer-list">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Sign In</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div>
                <div>
                  <h1 className="secondcolumncontent text-center">
                    Popular Links
                  </h1>
                  <div className=" mb-3 footer_hr_line3"></div>
                  <div>
                    <div className="thirdcolumnadress">
                      <ul className="footer-list">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Sign In</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbotomset">
          <p className="botomcontent">
            All Rights Reserved. Designed by Student
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

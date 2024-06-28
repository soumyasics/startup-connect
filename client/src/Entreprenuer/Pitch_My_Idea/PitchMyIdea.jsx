import React, { useState } from "react";
import "./PitchMyIdea.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomepageNavbar from "../../components/commonNavbar/HomepageNavbar";
import Footer_2 from "../../components/Footer/Footer_2";
import axiosInstance from "../../BaseAPIs/AxiosInstance";

function PitchMyIdea() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/entrepreneur/login");
  };

  useEffect(() => {
    if (
      localStorage.getItem("Enterprenuertoken") == null &&
      localStorage.getItem("Enterprenuer") == null
    ) {
      navigate("/");
    }
  }, [navigate]);

  const id = localStorage.getItem("Enterprenuer");
  console.log("eid", id);

  const [pmidata, setPmidata] = useState({
    epId: id,
    companyName: "",
    category: "",
    audience: "",
    workingArea: "",
    domain: "",
    market: "",
    value: "",
    competitor1: "",
    competitor2: "",
    differentiator: "",
    currentStatus: "",
    expectedHelpCategory: "",
    expectedHelp: "",
    equityAmount: "",
    Isactive: false,
    status: true,
  });
  const [errors, setErrors] = useState({
    companyName: "",
    category: "",
    audience: "",
    workingArea: "",
    domain: "",
    market: "",
    value: "",
    competitor1: "",
    competitor2: "",
    differentiator: "",
    currentStatus: "",
    expectedHelpCategory: "",
    expectedHelp: "",
    equityAmount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPmidata({ ...pmidata, [name]: value });
  };

  console.log(pmidata, "pmidata");
  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    let formValid = true;

    if (!pmidata.companyName.trim()) {
      formValid = false;
      errors.companyName = "Company Required";
    }
    if (!pmidata.category.trim()) {
      formValid = false;
      errors.category = "Category Required";
    }
    if (!pmidata.audience.trim()) {
      formValid = false;
      errors.audience = "Audience Required";
    }
    if (!pmidata.workingArea.trim()) {
      formValid = false;
      errors.workingArea = "Working Area Required";
    }
    if (!pmidata.domain.trim()) {
      formValid = false;
      errors.domain = "Domain Required";
    }
    if (!pmidata.market.trim()) {
      formValid = false;
      errors.market = "Market Required";
    }
    if (!pmidata.value.trim()) {
      formValid = false;
      errors.value = "Value Required";
    }
    if (!pmidata.competitor1.trim()) {
      formValid = false;
      errors.competitor1 = "Competitor1 Required";
    }
    if (!pmidata.competitor2.trim()) {
      formValid = false;
      errors.competitor2 = "Competitor2 Required";
    }
    if (!pmidata.differentiator.trim()) {
      formValid = false;
      errors.differentiator = "Differentiator Required";
    }
    if (!pmidata.currentStatus.trim()) {
      formValid = false;
      errors.currentStatus = "CurrentStatus Required";
    }
    if (!pmidata.expectedHelpCategory.trim()) {
      formValid = false;
      errors.expectedHelpCategory = "Expected Category Required";
    }
    if (!pmidata.expectedHelp.trim()) {
      formValid = false;
      errors.expectedHelp = "Expected Required";
    }
    if (!pmidata.equityAmount.trim()) {
      formValid = false;
      errors.equityAmount = "Equity Amount Required";
    }
    setErrors(errors);

    if (
      pmidata.companyName &&
      pmidata.category &&
      pmidata.audience &&
      pmidata.workingArea &&
      pmidata.domain &&
      pmidata.market &&
      pmidata.value &&
      pmidata.competitor1 &&
      pmidata.competitor2 &&
      pmidata.differentiator &&
      pmidata.currentStatus &&
      pmidata.expectedHelpCategory &&
      pmidata.expectedHelp &&
      pmidata.equityAmount
    ) {
      formValid = true;
    }
    if (Object.keys(errors).length === 0 && formValid) {
      try {
        var response;
        if (pmidata) {
          response = await axiosInstance.post(
            `/pitchMyIdeaAddCompany/${id}`,
            pmidata
          );
        }
        console.log("Response:", response);
        if (response.status == 200) {
          alert(response.data.msg);
          navigate("/entrepreneur/enthomepage");
        }
      } catch (error) {
        console.error("Error:", error);
        let msg = error?.response?.data?.msg || "Error occurred";
        alert(msg);
      }
    } else {
      console.log("Form is not valid", formValid);
      console.log("Data entered", pmidata);
    }
  };

  return (
    <>
      <HomepageNavbar />
      <section className="container">
        <div className="text-center headr">
          <h4 className="  mt-3  pmi_mainheading"> CREATE YOUR STARTUP</h4>
          <h3 className="pmi_sub_h3">Your Journey to Success </h3>
          <h3 className="pmi_sub_h3">Starts Here</h3>
          <div className="  mb-5  pmi_hr_line"></div>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="row">
            <div className="col column1">
              <label className="px-2">My Company Name</label>
              <input
                class="pmi_input"
                name="companyName"
                placeholder="Name of the company"
                type="text"
                onChange={handleInputChange}
              />
              {errors.companyName && (
                <div className="text-danger errortext">
                  {errors.companyName}
                </div>
              )}
              <label className="mt-5 px-2">Audience</label>
              <input
                class="pmi_input"
                name="audience"
                placeholder="A defined audience"
                type="text"
                onChange={handleInputChange}
              />
              {errors.audience && (
                <div className="text-danger errortext">{errors.audience}</div>
              )}
              <label className="mt-5 px-2">Domain</label>
              <input
                class="pmi_input"
                name="domain"
                placeholder="Secret sauce"
                type="text"
                onChange={handleInputChange}
              />
              {errors.domain && (
                <div className="text-danger errortext">{errors.domain}</div>
              )}
              <label className="mt-5 px-2">Value</label>
              <input
                class="pmi_input "
                name="value"
                placeholder="Defined value"
                type="text"
                onChange={handleInputChange}
              />
              {errors.value && (
                <div className="text-danger errortext">{errors.value}</div>
              )}
              <label className="mt-5 px-2">Competitor 2</label>
              <input
                class="pmi_input"
                name="competitor2"
                placeholder="Competitor 2"
                type="text"
                onChange={handleInputChange}
              />
              {errors.competitor2 && (
                <div className="text-danger errortext">
                  {errors.competitor2}
                </div>
              )}
              <label className="mt-5 px-2">Current Status</label>
              <input
                class="pmi_input"
                name="currentStatus"
                placeholder="Current state of product/team"
                type="text"
                onChange={handleInputChange}
              />
              {errors.currentStatus && (
                <div className="text-danger errortext">
                  {errors.currentStatus}
                </div>
              )}
              <label className="mt-5 px-2">Expected Help</label>
              <input
                class="pmi_input"
                name="expectedHelp"
                placeholder="What you would do with the ask"
                type="text"
                onChange={handleInputChange}
              />
              {errors.expectedHelp && (
                <div className="text-danger errortext">
                  {errors.expectedHelp}
                </div>
              )}
            </div>
            <div className="col column2">
              <label className="px-2">Category</label>
              <select
                class="pmi_input"
                name="category"
                placeholder=""
                onChange={handleInputChange}
              >
                <option value="">Select Industry Sector</option>
                <option value="Technology">Technology</option>
                <option value="E-commerce and Retail">
                  E-commerce and Retail
                </option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Finance and Insurance">
                  Finance and Insurance
                </option>
                <option value="Education">Education</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Media and Entertainment">
                  Media and Entertainment
                </option>
                <option value="Transportation and Logistics">
                  Transportation and Logistics
                </option>
                <option value="Real Estate">Real Estate</option>
                <option value="Environmental and Energy">
                  Environmental and Energy
                </option>
                <option value="Consumer Services">Consumer Services</option>
                <option value="Fashion and Lifestyle">
                  Fashion and Lifestyle
                </option>
              </select>
              {errors.category && (
                <div className="text-danger errortext">{errors.category}</div>
              )}
              <label className="mt-5 px-2">Working Area</label>
              <input
                class="pmi_input"
                name="workingArea"
                placeholder="Solve a problem"
                type="text"
                onChange={handleInputChange}
              />
              {errors.workingArea && (
                <div className="text-danger errortext">
                  {errors.workingArea}
                </div>
              )}
              <label className="mt-5 px-2">Market</label>
              <input
                class="pmi_input"
                name="market"
                placeholder="Defined market"
                type="text"
                onChange={handleInputChange}
              />
              {errors.market && (
                <div className="text-danger errortext">{errors.market}</div>
              )}
              <label className="mt-5 px-2">Competitor 1</label>
              <input
                class="pmi_input"
                name="competitor1"
                placeholder="Competitor 1"
                type="text"
                onChange={handleInputChange}
              />
              {errors.competitor1 && (
                <div className="text-danger errortext">
                  {errors.competitor1}
                </div>
              )}
              <label className="mt-5 px-2">Differentiator</label>
              <input
                class="pmi_input"
                name="differentiator"
                placeholder="One key differentiator"
                type="text"
                onChange={handleInputChange}
              />
              {errors.differentiator && (
                <div className="text-danger errortext">
                  {errors.differentiator}
                </div>
              )}
              <label className="mt-5 px-2">Expected Help Category</label>
              <input
                class="pmi_input"
                name="expectedHelpCategory"
                placeholder="The ask"
                type="text"
                onChange={handleInputChange}
              />
              {errors.expectedHelpCategory && (
                <div className="text-danger errortext">
                  {errors.expectedHelpCategory}
                </div>
              )}
              <label className="mt-5 px-2">Equity Amount</label>
              <input
                class="pmi_input"
                name="equityAmount"
                placeholder="Amount of equity offering"
                type="number"
                onChange={handleInputChange}
              />
              {errors.equityAmount && (
                <div className="text-danger errortext">
                  {errors.equityAmount}
                </div>
              )}
            </div>
          </div>

          <div className="pmi_btn_div">
            <button className="pmi_btn">Pitch My Idea</button>
          </div>
        </form>
      </section>
      <Footer_2 />
    </>
  );
}

export default PitchMyIdea;

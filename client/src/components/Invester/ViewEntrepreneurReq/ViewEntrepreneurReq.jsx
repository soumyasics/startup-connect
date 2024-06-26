import React, { useEffect, useState } from "react";
import "./ViewEntrepreneurReq.css";
import { CommonNavbar } from "../../commonNavbar/commonNavbar";
import Footer_2 from "../../Footer/Footer_2";
import InvestorNav from "../InvestorNav/InvestorNav";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../../BaseAPIs/AxiosInstance";
import { imageUrl } from "../../../ImageAPIs/Image_Urls";

function ViewEntrepreneurReq() {
  const [plan, setPlan] = useState([]);
  const [isProcessed, setIsProcessed] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(imageUrl);
  useEffect(() => {
    axiosInstance
      .post("/viewInvestorReqById/" + id)
      .then((res) => {
        console.log(res, "res");
        if (res.status === 200) {
          setPlan(res.data.data);
        }
      })
      .catch((err) => {
        alert("Failed to fetch user details");
      });
  }, [id]);

  const handleReject = (id) => {
    axiosInstance
      .post("/rejectInvestorReqById/" + id)
      .then((res) => {
        alert("Request rejected");
        setIsProcessed(true);
      })
      .catch((err) => {
        alert("Failed to fetch user details");
      });
  };

  const handleAccept = (id) => {
    axiosInstance
      .post("/acceptInvestorReqByInvId/" + id)
      .then((res) => {
        alert("Request accepted");
        setIsProcessed(true);
      })
      .catch((err) => {
        alert("Failed to fetch user details");
      });
  };

  return (
    <>
      <CommonNavbar />
      <InvestorNav />
      <div className="container mb-3 mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col">
            <div className="ad_invaccept_profile">
              <div className="ad_invaccept_profile_pic_div">
                <img
                  src={`${imageUrl}/${plan.entId?.image.originalname}`}
                  className="ad_invaccept_profile_pic "
                  alt="profile_image"
                />
              </div>
              <h3 className="ad_invaccept_fname">
                Name : {plan.investorId?.name}
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="ad_invaccept_profile">
              <div className="ad_invaccept_details1">
                <table className="ad_invaccept_gfg">
                  <tr>
                    <th className="ad_invaccept_head">E-Mail</th>
                    <td>{plan.investorId?.email}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Investing Category</th>
                    <td>{plan.investorId?.investing_category}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Contact No</th>
                    <td>{plan.investorId?.contact}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Occupation</th>
                    <td>{plan.investorId?.occupation}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Nationality</th>
                    <td>{plan.investorId?.nationality}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="ad_invaccept_profile">
              <div className="ad_invaccept_details2">
                <table className="ad_invaccept_gfg">
                  <tr>
                    <th className="ad_invaccept_head">Organization</th>
                    <td>{plan.investorId?.organization}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Description</th>
                    <td>{plan.investorId?.description}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Address</th>
                    <td>{plan.investorId?.address}</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          <div className="col">
            <div className="invview_ent_viewsplan_profile">
              <tr className="invview_ent_viewsplan_subhead">
                <th>Company Name : {plan.entId?.company_name}</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>Is developing : {plan.planId?.currentStatus}</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>To help:</th>{plan.planId?.expectedHelp}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>To solve:</th>{plan.planId?.market}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>With:</th>{plan.planId?.domain}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
            </div>
          </div>
          <div className="col">
            <div className="invview_ent_viewsplan_profile">
              <tr className="invview_ent_viewsplan_subhead">
                <th>We compete in the growing:</th>{plan.planId?.workingArea}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>We are similar to competitor 1:</th>{plan.planId?.competitor1}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>Competitor 2:</th>{plan.planId?.competitor2}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>But we:</th>{plan.planId?.differentiator}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
            </div>
          </div>
          <div className="col">
            <div className="invview_ent_viewsplan_profile">
              <tr className="invview_ent_viewsplan_subhead">
                <th>Currently we have:</th>{plan.planId?.company_name}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>We are looking for:</th>{plan.planId?.expectedHelpCategory}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>To help us:</th>{plan.planId?.expectedHelpCategory}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>In exchange for:</th>{plan.planId?.equityAmount}
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <div className="invview_ent_viewsplan_btn">
                <button
                  className="invview_ent_viewsplan_acptbtn"
                  onClick={() => handleAccept(plan._id)}
                  disabled={isProcessed}
                >
                  Accept
                </button>
                <button
                  className="invview_ent_viewsplan_rjtbtn"
                  onClick={() => handleReject(plan._id)}
                  disabled={isProcessed}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_2 />
    </>
  );
}

export default ViewEntrepreneurReq;

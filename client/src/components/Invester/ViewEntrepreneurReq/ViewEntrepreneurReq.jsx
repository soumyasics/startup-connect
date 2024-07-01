import React, { useEffect, useState } from "react";
import "./ViewEntrepreneurReq.css";
import { CommonNavbar } from "../../commonNavbar/commonNavbar";
import Footer_2 from "../../Footer/Footer_2";
import InvestorNav from "../InvestorNav/InvestorNav";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from '../../../BaseAPIs/AxiosInstance'


function ViewEntrepreneurReq() {
  const [plan, setPlan] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams()

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
        toast.error("Failed to fetch user details");
      });
  }, []);

  const handleReject = () => {};
  const handleAccept = () => {};
  return (
    <>
      <CommonNavbar />
      <InvestorNav />
      <div className="container mb-3 mt-4">
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
          <div class="col">
            <div class="ad_invaccept_profile">
              <div class="ad_invaccept_profile_pic_div">
                <img
                  className="ad_invaccept_profile_pic "
                  alt="profile_image"
                />
              </div>
              <h3 className="ad_invaccept_fname">Name</h3>
            </div>
          </div>
          <div class="col">
            <div class="ad_invaccept_profile">
              <div class="ad_invaccept_details1">
                <table class="ad_invaccept_gfg">
                  <tr>
                    <th className="ad_invaccept_head">E-Mail</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Investing Category</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Contact No</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Occupation</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Nationality</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="ad_invaccept_profile">
              <div class="ad_invaccept_details2">
                <table class="ad_invaccept_gfg">
                  <tr>
                    <th className="ad_invaccept_head">Organization</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Description</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="ad_invaccept_head">Address</th>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
          <div class="col">
            <div class="invview_ent_viewsplan_profile">
              <tr className="invview_ent_viewsplan_subhead">
                <th>Company Name:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value " type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>Is developing:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>To help:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>To solve:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>With:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
            </div>
          </div>
          <div class="col">
            <div class="invview_ent_viewsplan_profile">
              <tr className="invview_ent_viewsplan_subhead">
                <th>We compete in the growing:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>Which last year was a:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>We are similar to competitor 1:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>Competitor 2:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>But we:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
            </div>
          </div>
          <div class="col">
            <div class="invview_ent_viewsplan_profile">
              <tr className="invview_ent_viewsplan_subhead">
                <th>Currently we have:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>We are looking for:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>To help us:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <tr className="invview_ent_viewsplan_subhead">
                <th>In exchange for:</th>
              </tr>
              <tr>
                <td>
                  <input className="invview_ent_viewsplan_value" type="text" />
                </td>
              </tr>
              <div className="invview_ent_viewsplan_btn">
                <button
                  className="invview_ent_viewsplan_acptbtn"
                  onClick={handleAccept}
                >
                  {" "}
                  Accept
                </button>
                <button
                  className="invview_ent_viewsplan_rjtbtn"
                  onClick={handleReject}
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

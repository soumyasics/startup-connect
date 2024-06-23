import React from "react";
import home1 from "../../assets/hugeicons_alms (1).png";
import home2 from "../../assets/hugeicons_mentoring (1).png";
import home3 from "../../assets/Group 56.png";
import home4 from "../../assets/Vector.png";
import "./Admin.css"
import RecentIvesitors from "./RecentIvesitors";
import RecentMentors from "./RecentMentors";
import AdminFooter from "./AdminFooter";

function AdminDashbord() {
  return (
    <div>
    <div className="container mt-5">
      <div>
        <p className="text-info">Overview</p>
        <h5 className="mt-3">Admin Dashboard</h5>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="p-3 admincard">
              Investors
              <div className="row mt-4">
                <div className="col-6">
                  <h3>123</h3>
                </div>
                <div className="col-6 ">
                  <img className="w-25" src={home1}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="p-3 admincard">
              Mentors
              <div className="row mt-4">
                <div className="col-6">
                  <h3>123</h3>
                </div>
                <div className="col-6 ">
                  <img className="w-25" src={home2}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="p-3 admincard">
              Entrepreneurs
              <div className="row mt-4">
                <div className="col-6">
                  <h3>123</h3>
                </div>
                <div className="col-6 ">
                  <img className="w-25" src={home3}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="p-3 admincard">
              Events
              <div className="row mt-4">
                <div className="col-6">
                  <h3>123</h3>
                </div>
                <div className="col-6 ">
                  <img className="w-25" src={home4}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentIvesitors/>
      <RecentMentors/>
    </div>
    <AdminFooter/>
</div>
  );
}

export default AdminDashbord;

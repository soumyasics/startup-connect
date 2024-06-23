import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Frame from "../../assets/Frame 40.png";
 import home from "../../assets/home.png"
 import home1 from "../../assets/Vector (1).png"
 import home2 from "../../assets/fluent-mdl2_blog.png"
 import home3 from "../../assets/hugeicons_alms.png"
 import home4 from "../../assets/hugeicons_complaint.png"
 import home5 from "../../assets/hugeicons_mentoring.png"
 import home6 from "../../assets/man.png"
  import home7 from "../../assets/line-md_log-out.png"
function AdminNavbar() {
  return (
    <div>
      <div className="nav_sticky">
        <Navbar className="px-4">
          <img className="nav_img" src={Frame} alt="Frame" />

          <Navbar.Toggle />
        </Navbar>
        <hr></hr>
      </div>
      <div className="container">
        <nav>
          <div className="">
            <a className=" text-dark text-decoration-none  mx-4"><img src={home}></img> Home</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home1}></img> Events</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home6}></img> Entrepreneurs</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home3}></img> Investors</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home5}></img> Mentors</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home4}></img> Complaints</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home2}></img> Blogs</a>
            <a className=" text-dark text-decoration-none mx-4"><img src={home7}></img> Logout</a>
          </div>
        </nav>
      </div>        <hr></hr>

    </div>
  );
}

export default AdminNavbar;

import "./EntrepreneurChat.css";
import { CommonNavbar } from "../../components/commonNavbar/commonNavbar";
import HomepageNavbar from "../../components/commonNavbar/HomepageNavbar";
import Footer_2 from "../../components/Footer/Footer_2";
import inv_chat_search from "../../assets/inv_chat_search.png";
import inv_chat_bell from "../../assets/inv_chat_bell.png";
import inv_chat_love from "../../assets/inv_chat_love.png";
import inv_chat_attachment from "../../assets/inv_chat_attachment.png";
import inv_chat_emoji from "../../assets/inv_chat_emoji.png";
import inv_chat_mic from "../../assets/inv_chat_mic.png";
import inv_chat_send from "../../assets/inv_chat_send.png";
import inv_chat_camera from "../../assets/inv_chat_camera.png";
import profile from "../../assets/Ellipse 5.png";
import axiosInstance from "../../BaseAPIs/AxiosInstance";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function EntrepreneurChat({ role }) {
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const [chat, setChat] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axiosInstance
        .post("/viewChatMsgs", {
          entId: role == 'ent' ? localStorage.getItem("Enterprenuer") : id,
          mentorId: role == 'ent' ? id : localStorage.getItem("Mentor"),
        })
        .then((res) => {
          setChat(res.data.data);
        });
    }, 1000);
  }, []);

  function importData() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      // you can use this method to get file and perform respective operations
      let files = Array.from(input.files);
    };
    input.click();
  }

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const send = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/chatting", {
        msg: msg,
        from: role,
        to: role=='ent' ? "ment": 'ent',
        entId: role=='ent' ? localStorage.getItem("Enterprenuer") : id,
        mentorId: role == 'ent' ? id : localStorage.getItem("Mentor"),
      })
      .then((res) => {
        setMsg("");
      });
  };
  return (
    <>
      <CommonNavbar />
      <HomepageNavbar />
      <div className="container ent_chat_con mb-5">
        <section className="ent_chat_box mt-5">
          <div className="col ent_chat_nav">
            <img src={profile} className="ent_chat_profile" />
            <h3 className=" ent_chat_name"> </h3>
            {/* <button className="ent_chat_nav_btn">
            //   <img className="ent_chat_nav_icon" src={inv_chat_search} />
            // </button>
            // <button className="ent_chat_nav_btn">
            //   <img className="ent_chat_nav_icon" src={inv_chat_love} />
            // </button>
            // <button className="ent_chat_nav_btn">
            //   <img className="ent_chat_nav_icon" src={inv_chat_bell} />
            </button>*/}
          </div>
          <div className="container ">
          <div className="ent_chat_messages">
          {chat.map((message, index) => (
            <div key={index} className={`ent_chat_message ${role === message.from ? "ent_chat_message_left" : "ent_chat_message_right"}`}>
              <p>{message.msg}</p>
            </div>
          ))}
        </div>
          </div>
        </section>

        <section>
          <div className="ent_chat_foot">
           {/* <button className="ent_chat_foot_btn mx-2" onClick={importData}>
              <img className="ent_chat_nav_icon" src={inv_chat_attachment} />
            </button>
            <button className="ent_chat_foot_btn">
              <img className="ent_chat_nav_icon" src={inv_chat_emoji} />
            </button>*/}
            <div className="ent_chat_foot_input_div ms-5 ">
              <button className="ent_chat_foot_mic">
                <img className="ent_chat_nav_icon" src={inv_chat_mic} />
              </button>
              <input className="text-center"
                type="text"
                placeholder="Write Something"
                value={msg}
                onChange={handleChange}
              />
            </div>

           
            <button className="ent_chat_foot_btn" onClick={send}>
              <img className="ent_chat_nav_icon" src={inv_chat_send} />
            </button>
          </div>
        </section>
      </div>
      <Footer_2 />
    </>
  );
}

export default EntrepreneurChat;

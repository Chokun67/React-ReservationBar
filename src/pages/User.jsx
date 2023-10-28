import React, { useState } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import profile from "../assets/image/profile.png";
import { useNavigate } from 'react-router-dom';
function User() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    username: "",
    password: "",
    telephone: "",
    birthday: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์หรือทำอย่างอื่นตามต้องการ
    console.log(formData);
  };
  const navigate = useNavigate();
  const goEdit = () => {
    // เมื่อคลิกปุ่ม, เรียกใช้ history.push() เพื่อเปิดเส้นทาง "/reserve"
    navigate('/editprofile');
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="user-box flex-between">
              <div className="left-user flex-column">
                <div className="profilepic">
                  <img src={profile} alt="Your profile" />
                </div>
                <div>Satoru Gojo</div>
                <div>@thehonoredgojo</div>
                <div className="grid-user">
                  <div className="detail-user">
                    <div className="name">First Name:</div>
                    <div>นามสกุล 1</div>
                  </div>
                  <div className="detail-user">
                    <div className="name">Last Name:</div>
                    <div>นามสกุล 2</div>
                  </div>
                  <div className="detail-user">
                    <div className="name">Gender</div>
                    <div>นามสกุล 3</div>
                  </div>
                  <div className="detail-user">
                    <div className="name">Birthday</div>
                    <div>นามสกุล 4</div>
                  </div>
                  <div className="detail-user">
                    <div className="name">Tel. number:</div>
                    <div>นามสกุล 1</div>
                  </div>
                  <div className="detail-user">

                  </div>
                  <div className="detail-user">
                    <div className="name">Username</div>
                    <div>นามสกุล 3</div>
                  </div>
                  <div className="detail-user">
                    <div className="name">Password</div>
                    <div>นามสกุล 4</div>
                  </div>
                </div>
                <button className="right-border-button" onClick={goEdit}>
                  Edit profile 
                </button>
              </div>
              <hr />
              <div className="right-user flex-column">
                <h2>
                  Reservation <br />
                  History
                </h2>
                <ul>
                  <li>24/12/2018: 1 table</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

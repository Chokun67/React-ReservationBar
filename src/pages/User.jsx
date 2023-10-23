import React, { useState } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import profile from "../assets/image/profile.png";
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

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="user-box flex-between">
              <div className="left-user flex-column">
                <div className="logo">
                  <img src={profile} alt="Your profile" />
                </div>
                <p>Satoru Gojo</p>
                <p>@thehonoredgojo</p>
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

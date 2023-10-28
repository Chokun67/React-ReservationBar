import React, { useState } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import profile from "../assets/image/profile.png";
function Edituser() {
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
              <div className="form-user">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id="birthday" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel-number">Tel. Number</label>
                    <input
                      type="tel"
                      id="tel-number"
                      placeholder="Enter telephone number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edituser;

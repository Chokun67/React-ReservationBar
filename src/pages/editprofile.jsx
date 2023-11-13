import React, { useState } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import { AiOutlineCheck } from "react-icons/ai";
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
    confirmpassword:""
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
            <form className="edit-form" onSubmit={handleSubmit}>
                <div className="name-container">
                  <div>
                    <label>First Name:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="name-container">
                  <div>
                    <label>Gender:</label>
                    <select
                  name="gender"
                  className="selectGender"
                  value={formData.gender}
                  onChange={handleChange}>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
                  </div>
                  <div>
                    <label>Birthday:</label>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                    />
                  </div>
                </div>
               <div className="name-container">
               <div>
                  <label>telephone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
               </div>
                <div className="textleft">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="textleft">
                  <label>ConfirmPassword:</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="bottom">
                <button type="submit" className="left-border-button">
                  confirm <AiOutlineCheck/>
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edituser;

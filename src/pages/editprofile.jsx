import React, { useState } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import { AiOutlineCheck } from "react-icons/ai";
import profile from "../assets/image/profile.png";
import { useCookies } from 'react-cookie';
import { API } from "../assets/api/authen";

function Edituser() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [formIsValid, setFormIsValid] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    username: "",
    phone: "",
    birthday: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z]+$/.test(value)) {
        newErrors[name] = "กรุณากรอกเฉพาะตัวอักษร";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "phone") {
      if (value.length != 10) {
        newErrors[name] = "กรุณากรอกเบอร์โทรให้ครบถ้วน";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "username") {
      // if(!value.includes("@")){
      //   newErrors[name] = "Username must be a  email address format.";
      // }
      // else 
      if (value.length < 8) {
        newErrors[name] = "Username must be at least 8 characters";
      }
      else {
        delete newErrors[name];
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setFormIsValid(!hasErrors);
  };

  const handleSubmit = (e) => {
    
    if(!formIsValid){
      return swalactive("error", "Please check your form");
    }
    if (!Object.values(formData).every((value) => value !== "")) {
      return swalactive("error", "Please fill out all fields");
    }

    e.preventDefault();
    console.log(formData);
    API.user_updateinfo(cookies.token,formData).then((response) => {
      console.log('POST Response:', response.data);
      swalactive("success", "Request music success");
    })
    .catch((error) => {
      console.error('POST Error:', error);
      swalactive("error", "Request music error");
    });
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="user-box flex-column">
              <form className="edit-form" onSubmit={handleSubmit}>
                <div className="picuser-center">
                <div className="profilepic2">
                  <img src={profile} alt="Your profile" />
                </div>
                </div>
                <div className="name-container">
                  <div>
                    <label>First Name:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{ borderBottom: errors.firstName ? "1px solid red" : "" }}
                    />
                    {errors.firstName && <p className="error-message ">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{ borderBottom: errors.lastName ? "1px solid red" : "" }}
                    />
                    {errors.lastName && <p className="error-message ">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="name-container">
                  <div>
                    <label>Gender:</label>
                    <select
                      name="gender"
                      className="selectGender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
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
                      style={{ borderBottom: errors.phone ? "1px solid red" : "" }}
                    />
                    {errors.phone && <p className="error-message ">{errors.phone}</p>}
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
                <div className="bottom">
                  <button type="submit" className="left-border-button">
                    confirm <AiOutlineCheck />
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

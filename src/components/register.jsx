import React, { useState } from "react";
import "../assets/style/register.css";
import { FcGoogle } from "react-icons/fc";
import { API } from "../assets/api/authen";
import swalactive from "./swalfire";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "ชาย",
    username: "",
    password: "",
    phone: "",
    birthday: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    password: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);

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
    if (name === "password") {
      if (value.length < 6) {
        newErrors[name] = "กรุณากรอกรหัส 6-20 ตัว";
      } else {
        delete newErrors[name];
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setFormIsValid(!hasErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formIsValid){
      return swalactive("error", "Please check your form");
    }
    if (!Object.values(formData).every((value) => value !== "")) {
      return swalactive("error", "Please fill out all fields");
    }
    
  
    const fullName = formData.firstName && formData.lastName
      ? `${formData.firstName} ${formData.lastName}`
      : null;
  
    const finalFormData = { ...formData };
    if (fullName) {
      finalFormData.name = fullName;
      delete finalFormData.firstName;
      delete finalFormData.lastName;
    }
  
    try {
      console.log(finalFormData);
      const response = await API.user_register(finalFormData);
      console.log("POST Response:", response.data);
      window.location.reload();
      swalactive("success", "Register successfully");
    } catch (error) {
      console.error("POST Error:", error);
      swalactive("error", "Failed to register");
    }
  };

  return (
    <>
      <div className="re-right-half">
        <div className="regis-container">
          <h1>Register</h1>
          <form className="login-form" onSubmit={handleSubmit}>
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
            <div>
              <label>telephone:</label>
              <input
                type="number"
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
                style={{ borderBottom: errors.username ? "1px solid red" : "" }}
              />
              {errors.username && <p className="error-message ">{errors.username}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ borderBottom: errors.password ? "1px solid red" : "" }}
              />
              {errors.password && <p className="error-message ">{errors.password}</p>}
            </div>

            <button type="submit" className="login-button">
              Submit
            </button>
            <div className="separator">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <button type="button" className="google-login-button">
              <FcGoogle className="icon-google" /> Continue with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

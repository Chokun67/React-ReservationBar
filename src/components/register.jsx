import React, { useState } from "react";
import "../assets/style/register.css";
import { FcGoogle } from "react-icons/fc";
import { API } from '../assets/api/authen';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    username: "",
    password: "",
    phone: "",
    birthday: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedBirthday = new Date(formData.birthday).toISOString().split('T')[0];
    formData.birthday = formattedBirthday;

    const fullName = formData.firstName && formData.lastName ? `${formData.firstName} ${formData.lastName}` : null;
    const finalFormData = { ...formData };
    if (fullName) {
      finalFormData.name = fullName;
      delete finalFormData.firstName;
      delete finalFormData.lastName;
    }

    console.log(finalFormData);
    API.postUserData(finalFormData)
      .then((response) => {
        console.log('POST Response:', response.data);
        // ทำอะไรก็ตามหลังจาก POST เสร็จสิ้น
      })
      .catch((error) => {
        console.error('POST Error:', error);
        // จัดการข้อผิดพลาด
      });
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
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
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
                <FcGoogle className="icon-google"/> Continue with Google
                </button>
              </form>
            </div>
          </div>
    </>
  );
}

export default Signup;
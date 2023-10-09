import React, { useState } from "react";
import "../assets/style/register.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
function Signup() {
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
      <div className="bigbg">
        <div className="flex-container">
          <div className="re-left-half">
            <div className="login-container">
              <h1>HELLO THERE!</h1>
              <p>
                Please provide information to register your <br />
                account before making reservations.
                <br />
                Thank you!
              </p>
              <div className="logo">
                <img src={logo} alt="Your Logo" />
              </div>
              <p>Already have an account? Log in!</p>

              <Link to="/login">
                {" "}
                <div className="go-register">
                  <p>Login</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="re-right-half">
            <div className="login-container">
              <h1>Register</h1>
              <form className="login-form">
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
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    />
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
                  <label>Telephone:</label>
                  <input
                    type="text"
                    name="telephone"
                    value={formData.telephone}
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
                  <FcGoogle className="icon-google" />
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

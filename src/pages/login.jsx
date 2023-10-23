import React, { useState } from "react";
import "../assets/style/slide.css";
import "../assets/style/login.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import Login from "../components/login.jsx";
import Register from "../components/register.jsx";
//////////////////////////////////////////////////////////////
const Signin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    telephone: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <div className="bigbg">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container "
      >
        <div className="form-container sign-up-container">
          <Register />
        </div>
        <div className="form-container sign-in-container">
          <Login />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isRightPanelActive ? "overlay-inactive" : ""
              }`}
            >
              <div className="login-container">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Your Logo" />
                  </Link>
                </div>
                <p>Don’t have an account? Register!</p>
                <button
                  className="go-register"
                  id="signIn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isRightPanelActive ? "" : "overlay-inactive"
              }`}
            >
              <div className="login-container">
                <h1>WELCOME BACK!</h1>
                <p>
                  Please log in to your account with your username <br />
                  and password before making reservations.
                  <br />
                  Thank you!
                </p>
                <div className="logo">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Your Logo" />
                    </Link>
                  </div>
                </div>
                <p>Already have an account? Log in!</p>
                <button
                  className="go-register"
                  id="signUp"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

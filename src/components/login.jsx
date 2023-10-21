import React from "react";
import "../assets/style/login.css";
// import logo from "../assets/image/logo.png";
// import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signin() {
  return (
    <>
      <div className="left-half">
            <div className="login-container">
              <h1>Login</h1>
              <form className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <button type="submit" className="login-button">
                  Login
                </button>
                <div className="separator">
                  <hr />
                  <span>or</span>
                  <hr />
                </div>
                <button type="button" className="google-login-button">
                  <FcGoogle className="icon-google"/>Login with Google
                </button>
              </form>
            </div>
          </div>
    </>
  );
}

export default Signin;
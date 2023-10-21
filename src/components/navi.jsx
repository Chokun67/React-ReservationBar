import React from "react";
import "../assets/style/navi.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

function navi() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="Your Logo" />
              <div className="circle"></div>
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/reserve">RESERVE</Link>
            </li>
            <li>
              <Link to="/login">MUSIC</Link>
            </li>
            <li>
              <Link to="/register">USER</Link>
            </li>
          </ul>
          <div className="auth-buttons">
            <div className="border-gradient border-gradient-purple radius">
              <Link to="/login">Login</Link>
            </div>
            {/* <div className="border-gradient border-gradient-purple radius">
              <Link to="/register">Register</Link>
            </div> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default navi;

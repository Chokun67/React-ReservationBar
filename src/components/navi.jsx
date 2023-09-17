import React from "react";
import "../assets/style/navi.css";
import logo from '../assets/image/logo.png';

function navi() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Your Logo" />
          </div>
          <ul>
            <li>
              <a href="#">RESERVE</a>
            </li>
            <li>
              <a href="#">MUSIC</a>
            </li>
            <li>
              <a href="#">USER</a>
            </li>
          </ul>
          <div className="auth-buttons">
            <button className="border-gradient border-gradient-purple radius">Login</button>
            <button className="border-gradient border-gradient-purple radius">Register</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default navi;

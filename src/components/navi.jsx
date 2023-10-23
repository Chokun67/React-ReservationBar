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
              <Link to="/music">MUSIC</Link>
            </li>
            <li>
              <Link to="/user">USER</Link>
            </li>
          </ul>
          <div className="auth-buttons">
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default navi;

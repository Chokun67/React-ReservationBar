import React,{useState} from "react";
import "../assets/style/navi.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

function navi() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  
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
          <ul className={menuOpen ? "open" : ""}>
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
          <div className="menunavi" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
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

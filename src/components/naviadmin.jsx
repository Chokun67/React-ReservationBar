import React,{useState} from "react";
import "../assets/style/navi.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

function naviadmin() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/admin">
            <div className="logo">
              <img src={logo} alt="Your Logo" />
              <div className="circle"></div>
            </div>
          </Link>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/admin/reserve">RESERVE</Link>
            </li>
            <li>
              <Link to="/admin/music">MUSIC</Link>
            </li>
            <li>
              <Link to="/admin/user">USER</Link>
            </li>
          </ul>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
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

export default naviadmin;
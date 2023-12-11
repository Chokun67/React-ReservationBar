import React, { useState,useEffect } from "react";
import "../assets/style/navi.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function navi() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [menuOpen, setMenuOpen] = useState(false);
  const [signin, setSignin] = useState(false);
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(cookies.token ){
      setSignin(false)
    }else{
      setSignin(true)
    }
    const handleResize = () => {
      // เมื่อขนาดหน้าจอเปลี่ยนแปลง
      const isMobile = window.innerWidth < 1000; // หรือค่าที่คุณต้องการ
      setMobile(isMobile);
    };
    // เพิ่ม event listener เพื่อตรวจสอบเมื่อขนาดหน้าจอเปลี่ยน
    window.addEventListener("resize", handleResize);
    // ในกรณีที่คอมโพเนนต์ถูกโหลดเข้ามาครั้งแรก
    handleResize();
    // ทำความสะอาด event listener ของ useEffect เมื่อคอมโพเนนต์ถูก unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    removeCookie('token');
    setSignin(false);
    navigate("/login", { replace: true });
    window.location.reload();
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const swalactive=()=>{
    Swal.fire('Please login first')
  }

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
              {!signin ? <Link to="/reserve">RESERVE</Link> : <Link onClick={()=>swalactive()}>RESERVE</Link>}
            </li>
            <li>
              {!signin ? <Link to="/music">MUSIC</Link> : <Link onClick={()=>swalactive()}>MUSIC</Link>}
            </li>
            <li>
              {!signin ? <Link to="/user">USER</Link> : <Link onClick={()=>swalactive()}>USER</Link>}
            </li>
          </ul>
          <div
            className={`menunavi ${menuOpen ? "changebar" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
          {mobile ? (
            <div className="auth-buttons">
              {signin? <PiSignInBold className="iconsignin" onClick={handleLogin}/>:<LuLogOut className="iconsignin" onClick={handleLogout}/>}
            </div>
          ) : (
            <div className="auth-buttons">
              <div>
              {signin?<Link to="/login">Login</Link>:<Link to="/" onClick={handleLogout}>Logout</Link>}
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default navi;

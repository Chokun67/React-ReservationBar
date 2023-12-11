import React, { useState } from "react";
import "../App.css";
import Navi from "../components/navi.jsx";
import Corousel from "../components/corousel";
import Footer from "../components/footer";
import logomain from "../assets/image/pic.png";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const printtoken = () => {
    console.log(cookies.token);
  };
  const navigate = useNavigate();
  
  return (
    <>
      <div className="background-blue">
      <div className="full-screen-bg">
        <div className="firstpage">
          <Navi />
          <div className="boxcover">
            <div className="content">
              <div className="storepic">
                <img src={logomain} alt="Your Logo" />
              </div>
            </div>
            <div className="welcome">
              <div className="content2">
                <h1>WELCOME</h1>
                <p>
                Welcome to Laorian, where vibrant ambiance meets exceptional service, 
                creating an unforgettable experience for every patron. Our website provides a seamless 
                platform for you to reserve the perfect table for your evening, ensuring you have the best seat in the house. 
                Join us at Laorian, where reservations and music preferences come together to elevate your night out. Cheers to good times 
                and great vibes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="pane2">
        <div className="left-pane">
          <h1>FEATURES</h1>
          <p>Reservation for tables <br/>Request for music</p>
        </div>
        <div className="right-pane flex-column-center">
          <Corousel />
          <button type="submit" className="date-button" onClick={()=>navigate("/reserve")}>
            Rerservation
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

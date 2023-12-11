import React, { useState } from "react";
import "../../App.css";
import Navi from "../../components/naviadmin";
import Corousel from "../../components/corousel";
import Footer from "../../components/footer";
import logomain from "../../assets/image/pic.png";
import { useCookies } from 'react-cookie';

function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const printtoken = () => {
    console.log(cookies.token);
  };
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
                <h1>WELCOME <br/>ADMIN</h1>
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
          <button onClick={printtoken}>test1</button>
        </div>
        <div className="right-pane">
          <Corousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
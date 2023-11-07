import React, { useState } from "react";
import "../App.css";
import Navi from "../components/navi.jsx";
import Corousel from "../components/corousel";
import Footer from "../components/footer";
import logomain from "../assets/image/pic.png";
import { useCookies } from 'react-cookie';

function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const printtoken = () => {
    console.log(cookies.token);
  };
  return (
    <>
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
                  ร็อคพลาซ่า คอมเมนต์ดั๊มพ์โอเลี้ยงสตาร์ท แอ็คชั่นฮีโร่จ๊อกกี้
                  แอร์นินจาแทงกั๊กคอนโทรล ออกแบบคาร์โก้สมิติเวชป๋า
                  มินต์บ๊อบสะบึมส์ บูติกดีเจบร็อกโคลีแก๊สโซฮอล์จตุคาม แอปเปิ้ล
                  ฟอยล์ทาวน์ มอนสเตอร์เอ๊าะแต๋ว คองเกรสฮัลโลวีนอพาร์ทเมนท์สเตย์
                  ทำงานแฟร์ไรเฟิลภารตะเซ่นไหว้ กฤษณ์บึ้มเก๋ากี้รันเวย์
                  ธรรมาแคร์แทงโก้อุด้งพลานุภาพ ฟินิกซ์แฟกซ์
                  แพลนแครกเกอร์ซูเอี๋ยภคันทลาพาธ
                </p>
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

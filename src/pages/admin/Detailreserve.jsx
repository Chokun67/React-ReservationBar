import React, { useState } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/navi.jsx";
import "../../assets/style/admins/Status.css";
import { useNavigate } from "react-router-dom";

function DetailReserve() {
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/reserve/refund");
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };


  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="box-row">
            <div className="box-confirm-status">
              <div className="closebutton" onClick={handleGoBack}></div>
              <div className="box-confirm-table flex-row">
                <div className="flex-part1 status-detail">
                  <h1>STATUS</h1>
                  <p>RESERVATION ID: 1000002031<br/>
                  USER ID: 1000002031<br/>
                  USER NAME: thehonoredgojo<br/>
                  TABLE: 1, 2<br/>
                  AMOUNT: 2<br/>
                  TIMESTAMP: 22/10/2023<br/>
                  DATE: 25/10/2023<br/>
                  TIME: 20:00<br/>
                  LIQUOR: Sangsom</p>
                </div>
                <div className="flex-part1">
                  <div className="pic-statement">
                    <img src="URL_รูปภาพ" alt="คำอธิบายรูปภาพ" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailReserve;

import React, { useState, useEffect } from 'react'
import Navi from "../../components/naviadmin.jsx";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

export default function Cancel() {
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/");
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
            <div className="box-confirm-cancel">
              <div className="closebutton" onClick={handleGoBack}></div>
              <div className="box-confirm-table flex-col">
                    <h2>Transfer money</h2>
                   <div className="canceltext">
                   <p>RESERVATION ID: 1000002031<br/>
                    USER ID: 1000002031<br/>
                    USER NAME: thehonoredgojo<br/>
                    TABLE: 1, 2<br/>
                    AMOUNT: 2<br/>
                    Cancel Date: 22/10/2023<br/>
                    Reserve Date: 25/10/2023<br/>
                    LIQUOR: Sangsom<br/>
                    Account Name: Satoru Gojo<br/>
                    Account Number: 013-7-11139-2<br/>
                    Bank: Kasikornthai</p>
                   </div>
                 <button className="left-border-button">Done<AiOutlineCheck /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

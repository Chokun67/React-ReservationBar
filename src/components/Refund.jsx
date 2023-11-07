import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Refund() {
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/Refund");
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="Refund-box flex-column">
              <div>
                <form className="refund-form">
                  <label htmlFor="AccountName">AccountName:</label>
                  <input
                    type="text"
                    id="AccountName"
                    name="AccountName"
                    required
                  />
                  <label htmlFor="AccountNumber">AccountNumber:</label>
                  <input
                    type="text"
                    id="AccountNumber"
                    name="AccountNumber"
                    required
                  />
                  <label htmlFor="Bank">Bank:</label>
                  <input type="text" id="Bank" name="Bank" required />
                </form>
              </div>
            </div>
            <div className="flex-row">
              <button className="right-border-button">
                <AiOutlineArrowLeft /> Back
              </button>
              <button className="left-border-button">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;

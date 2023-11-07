import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/status.css";
import { useNavigate } from "react-router-dom";

function Status() {
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate('/reserve/refund');
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
            <div className="status-box flex-column">
              <table>
                <thead>
                  <tr>
                    <th>RESERVATION ID</th>
                    <th>TABLE</th>
                    <th>AMOUNT</th>
                    <th>TIMESTAMP</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ข้อมูล 1</td>
                    <td>ข้อมูล 2</td>
                    <td>ข้อมูล 3</td>
                    <td>ข้อมูล 4</td>
                    <td>ข้อมูล 5</td>
                    <td>ข้อมูล 6</td>
                    <td onClick={handleGoURL}>ข้อมูล 7</td>
                  </tr>
                  <tr>
                  <td>ข้อมูล 1</td>
                    <td>ข้อมูล 2</td>
                    <td>ข้อมูล 3</td>
                    <td>ข้อมูล 4</td>
                    <td>ข้อมูล 5</td>
                    <td>ข้อมูล 6</td>
                    <td>ข้อมูล 7</td>
          
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;

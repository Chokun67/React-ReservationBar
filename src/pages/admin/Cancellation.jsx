import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/style/admins/Status.css";


function Cancellation() {
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/reserve/refund");
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };

  return (
    <>
      <div className="status-box2 flex-column">
        <table>
          <thead>
            <tr className="tr-admin">
              <th>RESERVATION ID</th>
              <th>USER ID</th>
              <th>USERNAME</th>
              <th>CANCEL DATE</th>
              <th>RESERVE DATE</th>
              <th>LIQUOR</th>
              <th>TRANFER</th>
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cancellation;
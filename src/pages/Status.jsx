import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/status.css";
import { useNavigate } from "react-router-dom";
import { API } from "../assets/api/authen";
import { useCookies } from "react-cookie";

function Status() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [myReserve, setMyReserve] = useState([]);
  const handleGoURL = (idReser) => {
    navigate(`/reserve/status/detail/${idReser}`);
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };
  useEffect(() => {
    API.getMyReservation(cookies.token)
      .then((response) => {
        console.log("POST Response:", response.data);
        setMyReserve(response.data);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  }, []);

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <h1>WELCOME</h1>
            <div className="status-box flex-column">
              <table>
                <thead>
                  <tr>
                    <th>RESERVATION ID</th>
                    <th>TABLE</th>
                    <th>AMOUNT</th>
                    <th>TIMESTAMP</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {myReserve ? (
                    myReserve.map((rowData, index) => (
                      <tr key={index}>
                        <td>{rowData._id}</td>
                        <td>{rowData.table_id}</td>
                        <td>1</td>
                        <td>{rowData.timestamp}</td>
                        <td>{rowData.arrival}</td>
                        <td onClick={() => handleGoURL(index)}>
                          {rowData.status}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">ไม่มีการจอง</td>
                    </tr>
                  )}
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

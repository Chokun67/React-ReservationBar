import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../../assets/api/authen';
import { useCookies } from 'react-cookie';

function StatusAdmin() {
  const [reservationData, setReservationData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/reserve/refund");
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };
  useEffect(() => {
    fetchReservationData();
  }, []);

  API.fetchReservationData(token)
    .then((response) => {
      // หากการร้องขอสำเร็จ, จะมีข้อมูลอยู่ใน response.data
      setReservationData(response.data);
    })
    .catch((error) => {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
    });


  return (
    <>
      <div className="status-box2 flex-column">
        <table>
          <thead>
            <tr className="tr-admin">
              <th>RESERVATION ID</th>
              <th>USER ID</th>
              <th>USERNAME</th>
              <th>TABLE</th>
              <th>AMOUNT</th>
              <th>TIMESTAMP</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>LIQUOR</th>
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
              <td>ข้อมูล 7</td>
              <td>ข้อมูล 8</td>
              <td>ข้อมูล 9</td>
              <td onClick={handleGoURL}>ข้อมูล 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StatusAdmin;

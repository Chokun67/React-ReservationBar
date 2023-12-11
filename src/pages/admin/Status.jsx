import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { API_Customer } from '../../assets/api/customer';

function StatusAdmin() {
  const [reservationData, setReservationData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const handleGoURL = (index) => {
    navigate(`/admin/reserve/detail/${index}`);
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };
  useEffect(() => {
    API_Customer.getDetailResevation(cookies.token)
    .then((response) => {
      console.log(response.data);
      setReservationData(response.data);
    })
    .catch((error) => {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      navigate('/admin/login');
    });
  }, []);

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
              {/* <th>AMOUNT</th> */}
              <th>TIMESTAMP</th>
              <th>DATE</th>
              {/* <th>TIME</th> */}
              <th>LIQUOR</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
          {reservationData ? (
  reservationData.map((rowData, index) => (
    <tr key={index}>
      <td>{rowData._id}</td>
      <td>{rowData.user_id}</td>
      <td>{rowData.nameUser}</td>
      <td>{rowData.table_id}</td>
      {/* <td>{rowData.gender}</td> */}
      <td>{rowData.timestamp}</td>
      <td>{rowData.arrival}</td>
      <td>{rowData.drink_id}</td>
      <td
        onClick={() => handleGoURL(index)}
        style={{
          color:
            rowData.status === 'waiting' ? 'yellow' :
            rowData.status === 'cancel-owner' || rowData.status === 'cancel-customer' ? 'red' :
            rowData.status === 'confirm' ? 'green' : 'inherit'
        }}
      >
        {rowData.status}
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="7">ไม่มีการจอง</td>
  </tr>
)}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default StatusAdmin;

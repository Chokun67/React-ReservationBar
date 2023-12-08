import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_Customer } from '../../assets/api/customer';
import { useCookies } from 'react-cookie';

function Cancellation() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [canceldata, setCanceldata] = useState([]);
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/reserve/refund");
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };

  const handleclick = (dataid) => {
    const data = {reservationID : dataid}
    API_Customer.customer_refundconfirm(cookies.token,data)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  };

  useEffect(()=>{
    API_Customer.getCustomerCancel(cookies.token)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        setCanceldata(response.data);
      })
      .catch((error) => {
        console.error("POST Error:", error);
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
              <th>CANCEL DATE</th>
              <th>RESERVE DATE</th>
              <th>LIQUOR</th>
              <th>TRANFER</th>
            </tr>
          </thead>
          <tbody>
            {canceldata.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData._id}</td>
              <td>{rowData.user_id}</td>
              <td>{rowData.name_song}</td>
              <td>{rowData.message}</td>
              <td>{rowData.arrival}</td>
              <td>{rowData.drink_id}</td>
              <td onClick={()=>handleclick(rowData._id)}>Click</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cancellation;
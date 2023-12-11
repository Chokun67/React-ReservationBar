import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_Customer } from '../../assets/api/customer';
import { useCookies } from 'react-cookie';

function Cancellation() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [canceldata, setCanceldata] = useState([]);
  const [loading , setloading] = useState(false);
  const navigate = useNavigate();
  const handleGoURL = (idcencel) => {
    navigate(`/admin/reserve/cancel/${idcencel}`);
  };

  const handleGoBack = () => {
    navigate(-1); // ใช้ useNavigate เพื่อย้อนกลับไป URL ก่อนหน้า
  };


  useEffect(()=>{
    API_Customer.getCustomerCancel(cookies.token)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        setCanceldata(response.data);
        setloading(true);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  }, []);

  return (
    <>
     {loading?( <div className="status-box2 flex-column">
        <table>
          <thead>
            <tr className="tr-admin">
              <th>RESERVATION ID</th>
              <th>USER ID</th>
              <th>NAME</th>
              <th>CANCEL DATE</th>
              <th>RESERVE DATE</th>
              <th>LIQUOR</th>
              <th>TRANFER</th>
            </tr>
          </thead>
          <tbody>
          {canceldata ? (
  canceldata.map((rowData, index) => (
    <tr key={index}>
      <td style={{ color: rowData.bankAccount.refundState ? 'gray' : 'white' }}>{rowData._id}</td>
      <td style={{ color: rowData.bankAccount.refundState ? 'gray' : 'white' }}>{rowData.user_id}</td>
      <td style={{ color: rowData.bankAccount.refundState ? 'gray' : 'white' }}>{rowData.NameUser}</td>
      <td style={{ color: rowData.bankAccount.refundState ? 'gray' : 'white' }}>{rowData.timestampCancel}</td>
      <td style={{ color: rowData.bankAccount.refundState ? 'gray' : 'white' }}>{rowData.arrival}</td>
      <td style={{ color: rowData.bankAccount.refundState ? 'gray' : 'white' }}>{rowData.drink_id}</td>
      <td style={{
    cursor: 'pointer',
    color: '#9be4f9', // เปลี่ยนสีตัวอักษรตามที่ต้องการ
    textDecoration: 'underline', // เพิ่ม underline เมื่อ hover
  }} onClick={() => handleGoURL(index)}>Click</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="7">ไม่มีการจอง</td>
  </tr>
)}
          </tbody>
        </table>
      </div>):<div>
        
      </div>}
    </>
  );
}

export default Cancellation;
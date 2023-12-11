import React, { useState, useEffect } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/naviadmin.jsx";
import "../../assets/style/admins/Status.css";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { API_Customer } from "../../assets/api/customer";
import { AiOutlineCheck } from "react-icons/ai";
import swalactive from "../../components/swalfire.jsx";

export default function Cancel() {
  const navigate = useNavigate();
  const [canceldata, setCanceldata] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleclick = () => {
    const data = {reservationID : canceldata._id}
    API_Customer.customer_refundconfirm(cookies.token,data)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        handleGoBack();
        swalactive('success','Refund user done')
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  };


  useEffect(() => {
    API_Customer.getCustomerCancel(cookies.token)
      .then((response) => {
        console.log("POST Resrvation:", response.data[id]);
        setCanceldata(response.data[id]);
        setloading(true);
      })
      .catch((error) => {
        console.error("POST Error:", error);
        navigate('/admin/login');
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="full-screen-bg-music">
          <div className="firstpage">
            <Navi />
            <div className="box-row">
              <div className="box-confirm-cancel">
                <div className="closebutton" onClick={handleGoBack}>
                  <span className="closebar1"></span>
                  <span className="closebar2"></span>
                </div>
                <div className="box-confirm-table flex-col">
                  <h2>Transfer money</h2>
                  <div className="canceltext flex-column">
                    <p>
                      RESERVATION ID: {canceldata._id}
                      <br />
                      USER ID: {canceldata.user_id}
                      <br />
                      USER NAME: {canceldata.nameUser}
                      <br />
                      TABLE: {canceldata.table_id}
                      <br />
                      AMOUNT: 1<br />
                      TIMESTAMP: {canceldata.timestamp}
                      <br />
                      DATE: {canceldata.arrival}
                      <br />
                      LIQUOR: {canceldata.drink_id}
                      <br />
                      Account Name: {canceldata.bankAccount.payee}
                      <br />
                      Account Number: {canceldata.bankAccount.accountNumber}
                      <br />
                      Bank: {canceldata.bankAccount.bankName}
                    </p>
                  </div>
                  <button className="left-border-button" onClick={handleclick}>
                    Done
                    <AiOutlineCheck />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

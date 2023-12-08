import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate ,useParams} from "react-router-dom";
import { API } from '../assets/api/authen';
import { useCookies } from 'react-cookie';

function Refund() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: "",
    bankName: "",
    Payee: "",
  });
  const handleGoURL = () => {
    navigate("/Refund");
  };
  const handleGoBack = () => {
    navigate(-1); 
  };
  const handleSubmit=()=>{
    const refundData = {
      "reservedId": id,
      "bankAccount": formData
    }
    API.user_refund(cookies.token,refundData)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        navigate(-1);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });

  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
                    name={formData.Payee}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="AccountNumber">AccountNumber:</label>
                  <input
                    type="text"
                    id="AccountNumber"
                    name={formData.accountNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="Bank">Bank:</label>
                  <input type="text" id="Bank" name={formData.bankName} onChange={handleInputChange} required />
                </form>
              </div>
            </div>
            <div className="flex-row">
              <button className="right-border-button">
                <AiOutlineArrowLeft /> Back
              </button>
              <button className="left-border-button" onClick={handleSubmit}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;

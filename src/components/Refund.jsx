import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../assets/api/authen";
import { useCookies } from "react-cookie";
import swalactive from "./swalfire.jsx";

function Refund() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: "",
    bankName: "",
    Payee: "",
  });
  const [errors, setErrors] = useState({
    accountNumber: "",
    bankName: "",
    Payee: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleSubmit = () => {
    console.log(formData);
    if (!Object.values(formData).every((value) => value != "")) {
      return swalactive("error", "Please fill out all fields");
    }
    if (!formIsValid) {
      return swalactive("error", "Please check your form");
    }
    const refundData = {
      reservedId: id,
      bankAccount: formData,
    };
    API.user_refund(cookies.token, refundData)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        navigate(`/reserve`);
        swalactive("success", "cancel reservation success");
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const newErrors = { ...errors };
    if (name === "Payee") {
      if (value.length > 30) {
        newErrors[name] = "Payee 30 characters maximunm";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "accountNumber") {
      if (value.length > 14) {
        newErrors[name] = "please check your accountnumber";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "bankName") {
      if (!/^[A-Za-z]+$/.test(value)) {
        newErrors[name] = "Only letters are allowed";
      }else if(value.length > 30){
        newErrors[name] = "30 characters maximunm";
      }else {
        delete newErrors[name];
      }
    }
    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setFormIsValid(!hasErrors);
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="refund-text">
              <h1>REFUND YOUR MONEY</h1>
              <p>Plese enter your bank account</p>
            </div>
            <div className="Refund-box flex-column">
              <div>
                <form className="refund-form">
                  <label htmlFor="AccountName">AccountName:</label>
                  <input
                    type="text"
                    id="payee"
                    name="Payee"
                    value={formData.Payee}
                    onChange={handleInputChange}
                    required
                    style={{
                      borderBottom: errors.Payee ? "1px solid red" : "",
                    }}
                  />
                  {errors.Payee && (
                  <p className="error-message ">{errors.Payee}</p>
                )}
                  <label htmlFor="AccountNumber">AccountNumber:</label>
                  <input
                    type="number"
                    id="AccountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    required
                    style={{
                      borderBottom: errors.accountNumber ? "1px solid red" : "",
                    }}
                  />
                  {errors.accountNumber && (
                  <p className="error-message ">{errors.accountNumber}</p>
                )}
                  <label htmlFor="Bank">Bank:</label>
                  <input
                    type="text"
                    id="Bank"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    required
                    style={{
                      borderBottom: errors.bankName ? "1px solid red" : "",
                    }}
                  />
                  {errors.bankName && (
                  <p className="error-message ">{errors.bankName}</p>
                )}
                </form>
              </div>
            </div>
            <div className="flex-row">
              <button className="right-border-button" onClick={handleGoBack}>
                <AiOutlineArrowLeft /> Back
              </button>
              <button className="left-border-button" onClick={handleSubmit}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;

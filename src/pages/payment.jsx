import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/music.css";
import "../assets/style/payment.css";
import image1 from "../assets/image/image1.png";
import { useNavigate,useParams } from 'react-router-dom';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';
function Payment() {
  const [selectedTime, setSelectedTime] = useState("1");
  const [selectedBottle, setSelectedBottle] = useState("1");
  const { id1 , id2} = useParams();

  // const handleDropdownChange = (event) => {
  //   setSelectedTime(event.target.value);
  // };
  const handleDropdownChange2 = (event) => {
    setSelectedBottle(event.target.value);
  };
  const navigate = useNavigate();
  const goPayment = () => {
    navigate(`/receipt/${id1}/${id2}/${selectedBottle}`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="payment-box flex-column">
              <div className="flex-part1 flex-row">
                <div className="table-pay">
                  <img src={image1} alt={`table`} />
                </div>
                <div className="flex-column flex-part3 detail-table">
                  <p className="flex-part1">ok</p>
                  <p className="flex-part1">aaaa</p>
                </div>
              </div>
              <div className="flex-part1 select-bottle">
                <label htmlFor="number">A bottle of liquor for reservation::</label>
                <select
                  id="bottle"
                  value={selectedBottle}
                  onChange={handleDropdownChange2}>
                  <option value="bottle1">bottle1</option>
                  <option value="bottle2">bottle2</option>
                  <option value="bottle3">bottle3</option>
                  <option value="bottle4">bottle4</option>
                  <option value="bottle5">bottle5</option>
                  <option value="bottle6">bottle6</option>
                  <option value="bottle7">bottle7</option>
                  <option value="bottle8">bottle8</option>
                </select>
              </div>
              <div className="flex-part1 flex-between">
                <button className="right-border-button" onClick={handleGoBack}><AiOutlineArrowLeft/> Back</button>
                <button className="left-border-button" onClick={goPayment}>Next<AiOutlineArrowRight/> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

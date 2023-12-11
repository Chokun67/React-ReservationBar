import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/music.css";
import "../assets/style/payment.css";
import image1 from "../assets/image/image1.png";
import { useNavigate,useParams } from 'react-router-dom';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai';
import { useCookies } from "react-cookie";

function Payment() {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("1");
  const [selectedBottle, setSelectedBottle] = useState("1");
  const { id1 , id2} = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if(!cookies.token){
      navigate("/login");
      return
    }
  }, []);

  const handleDropdownChange2 = (event) => {
    setSelectedBottle(event.target.value);
  };

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
                  <p className="flex-part1">Your Table: {id1}</p>
                  <p className="flex-part1">Date : {id2}</p>
                </div>
              </div>
              <div className="flex-part1 select-bottle">
                <label htmlFor="number">A bottle of liquor for reservation::</label>
                <select
                  id="bottle"
                  value={selectedBottle}
                  onChange={handleDropdownChange2}>
                  <option value="Chang">Chang</option>
                  <option value="Singha">Singha</option>
                  <option value="Leo">Leo</option>
                  <option value="Heineken">Heineken</option>
                  <option value="Delirium Tremens">Delirium Tremens</option>
                  <option value="SangSom">SangSom</option>
                  <option value="Singha Cocktail">Singha Cocktail</option>
                  <option value="Beer Chang">Beer Chang</option>
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

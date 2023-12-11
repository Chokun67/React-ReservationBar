import React, { useState } from "react";
import "../assets/style/bottomsheet.css";
import { useNavigate } from 'react-router-dom';

function BottomSheet( props ) {
  const [isOpen, setIsOpen] = useState(true);

  const openBottomSheet = () => {
    setIsOpen(true);
  };
  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(currentDate);
  const navigate = useNavigate();
  const goPayment = () => {
    navigate(`/payment/${props.selectedBoxes}/${props.selectedDate}`);
  };

  return (
    <div className={`bottom-sheet ${isOpen ? "open" : ""}`}>
      <div className="bottom-sheet-content">
        <div className="flex-betweencenter">
          <div className="">
            <p>{props.selectedDate}</p>
            <div className="slidebottom">
              <p>Table:</p>
              {props.selectedBoxes.map(
                (selectedBoxes, index) =>
                  <p key={index}>{selectedBoxes[index]} </p>
              )}
            </div>
          </div>
          <button type="submit" className="date-button" onClick={goPayment}>
            Rerservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;

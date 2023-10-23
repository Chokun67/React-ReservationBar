import React, { useState } from "react";
import "../assets/style/bottomsheet.css";

function BottomSheet({ selectedBoxes }) {
  const [isOpen, setIsOpen] = useState(true);

  const openBottomSheet = () => {
    setIsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(currentDate);

  return (
    <div className={`bottom-sheet ${isOpen ? "open" : ""}`}>
      <div className="bottom-sheet-content">
        <div className="flex-between">
          <div className="content">
            <p>{formattedDate}</p>
            <div className="slidebottom">
              <p>Table:</p>
              {selectedBoxes.map(
                (isSelected, index) =>
                  isSelected && <p key={index}>{index + 1}, </p>
              )}
            </div>
          </div>
          <button type="submit" className="date-button">
            Rerservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;

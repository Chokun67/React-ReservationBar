import React, { useState } from "react";
import "../assets/style/Modal.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Modal() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <>
      <AiOutlineQuestionCircle onClick={toggleModal} className="btn-modal" />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="modal-content">
            <AiOutlineQuestionCircle className="btn-modal marginauto" />
            <h1>REGULATIONS</h1>

            <p className="howto">
              1.If you cancel 1 or 2 day before your <br />
              reservation date, we will transfer back your
              <br /> money full amount.
              <br />
              2.Otherwise, we will deduct those money as <br />
              cancellation charges.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

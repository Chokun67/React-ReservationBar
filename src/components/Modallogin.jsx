import React, { useState } from "react";
import "../assets/style/Modal.css";
import { IoWarningOutline } from "react-icons/io5";

export default function ModalLogin() {
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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="modal-content">
            <IoWarningOutline className="btn-modal marginauto" />
            <h2>
              please Login
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
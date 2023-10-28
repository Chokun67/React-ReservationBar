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
            <h1>Reguration</h1>
            <ul className="howto">
              <li>1.วอเตอร์ธัมโมเวสต์รันเวย์วีเจแป๋ว</li>
              <li>2.ราชานุญาตคาปูชิโนสคริปต์ฮ่องเต้ซูเอี๋ย</li>
              <li>3.มือถือเรซิ่นโปรเจ็คแม็กกาซีน</li>
              <li>4.วาทกรรมแฮปปี้ยนตรกรรมด็อกเตอร์</li>
            </ul>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

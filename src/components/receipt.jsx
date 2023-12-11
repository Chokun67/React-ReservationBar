import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/payment.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCheck,
} from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../assets/api/authen";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

function Receipt() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();
  const { id1, id2, id3 } = useParams();
  const swalactive = (icon,title) => {
    Swal.fire({
      position: "center",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // รับไฟล์ที่ผู้ใช้เลือก
    setSelectedFile(file);
    // const file = event.target.files[0]; // รับไฟล์ที่ผู้ใช้เลือก
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const binaryImage = e.target.result; // รูปภาพในรูปแบบ binary (base64)
    //   setSelectedFile(binaryImage);
    // };
    // reader.readAsDataURL(file); // อ่านและแปลงรูปภาพเป็น binary
  };

  const confirmTable = () => {
    if (selectedFile) {
      console.log(id3);
      console.log(id2);
      API.reserveTable(cookies.token, selectedFile, id3, id1, id2)
        .then((response) => {
          console.log("POST Response:", response.data);
          navigate("/");
          swalactive("success", "Reservation success");
        })
        .catch((error) => {
          console.error("POST Error:", error);
          swalactive("error", "Reservation error");
        });
    } else {
      swalactive("warning", "Selectfile");
    }
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="receipt-box flex-column">
              <div className="flex-part3"></div>
              <div className="flex-part2">
                <p>
                  Account Name: Laorian Bar
                  <br />
                  Account Number: 013-7-11139-2
                  <br />
                  Bank: Kasikornthai
                </p>
              </div>
              <div className="flex-part1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="inputStyle"
                />
                {/* {selectedFile && (
                  <div>
                    <p>ไฟล์ที่เลือก: {selectedFile.name}</p>
                    <img src={URL.createObjectURL(selectedFile)} alt="รูปภาพ" /> แสดงผลรูปภาพ
                  </div>
                )} */}
              </div>
              <div className="flex-part1 flex-between">
                <button className="right-border-button" onClick={handleGoBack}>
                  <AiOutlineArrowLeft /> Back
                </button>
                <button className="left-border-button" onClick={confirmTable}>
                  Confirm
                  <AiOutlineCheck />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Receipt;

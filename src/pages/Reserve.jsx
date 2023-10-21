import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/reserve.css";
import BookTable from "../components/booktable.jsx";
import Modal from '../components/Modal'

function Reserve() {
  const [selectedDate, setSelectedDate] = useState(""); // สถานะเพื่อเก็บวันที่ที่เลือก
  const [dateOptions, setDateOptions] = useState([]); // สถานะเพื่อเก็บรายการวันที่

  // สร้างรายการวันที่ตั้งแต่วันที่ 10/10/2023 ไปอีก 7 วัน
  useEffect(() => {
    const startDate = new Date("2023-10-10");
    const options = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      options.push(formattedDate);
    }
    setDateOptions(options);
    setSelectedDate(options[0]); // เลือกวันที่แรกเป็นค่าเริ่มต้น
  }, []);

  // รีเnder รายการวันที่ใน dropdown
  const dateItems = dateOptions.map((date, index) => (
    <option key={index} value={date}>
      {date}
    </option>
  ));
  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // จัดจุดกึ่งกลางในแนวนอน
    alignItems: 'center' // จัดจุดกึ่งกลางในแนวตั้ง
  };

  return (
    <>
      <div className="full-screen-bg-reserve">
        <div className="firstpage">
          <Navi />
          <div className="boxreserve">
            <div className="content">
              <div style={flexContainerStyle}>
                <h2>PICK A DATE</h2>
                <Modal/>
              </div>
              <div>
                <select
                  className="dddate"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  {dateItems}
                </select>
                {selectedDate && <p>คุณเลือกวันที่: {selectedDate}</p>}
              </div>
              {/* <button type="submit" className="date-button">
                Rerservation
              </button> */}
              <div className="stage">Stage</div>
              <BookTable/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserve;

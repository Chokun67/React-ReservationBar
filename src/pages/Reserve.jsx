import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/reserve.css";

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

  return (
    <>
      <div className="full-screen-bg">
        <div className="firstpage">
          <Navi />
          <div className="boxreserve">
            <div className="content">
              <h1>Reguration</h1>
              <ul className="howto">
                <li>1.วอเตอร์ธัมโมเวสต์รันเวย์วีเจแป๋ว</li>
                <li>2.ราชานุญาตคาปูชิโนสคริปต์ฮ่องเต้ซูเอี๋ย</li>
                <li>3.มือถือเรซิ่นโปรเจ็คแม็กกาซีน</li>
                <li>4.วาทกรรมแฮปปี้ยนตรกรรมด็อกเตอร์</li>
              </ul>
              <h2>PICK A DATE</h2>

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
              <button type="submit" className="date-button">
                Rerservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserve;

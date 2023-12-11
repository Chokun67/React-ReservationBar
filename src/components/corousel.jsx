import React, { useState } from "react";
import "../assets/style/corousel.css";
import music from '../assets/image/music.png';
import open from '../assets/image/open.png';
import table from '../assets/image/table.png';
import { FiArrowLeftCircle,FiArrowRightCircle  } from "react-icons/fi";

function corousel() {
  const [selectedSlide, setSelectedSlide] = useState("s1");

  const handleRadioChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  function extractSingleDigit(inputString) {
    const regex = /\d/g;
    const match = inputString.match(regex);
    
    if (match && match.length > 0) {
      const firstMatch = match[0];
      const numberValue = parseInt(firstMatch, 10); // แปลงค่าเป็นตัวเลข
      if (!isNaN(numberValue)) {
        return numberValue; // ส่งค่าตัวเลขกลับ
      }
    }
  
    return NaN; // หรือค่าที่คุณต้องการในกรณีไม่พบตัวเลข
  }

  const handleClickLeft = () => {
    if(selectedSlide === "s1"){
        
        setSelectedSlide("s3");
    }else{
        setSelectedSlide((pre) => "s"+(extractSingleDigit(pre)-1));
    }
  };

  const handleClickRight = () => {
    if(selectedSlide === "s3"){
        
        setSelectedSlide("s1");
    }else{
        setSelectedSlide((pre) => "s"+(extractSingleDigit(pre)+1));
    }
  };
  return (
    <div className="corousel">
      <FiArrowLeftCircle className="btn-corou" onClick={handleClickLeft}/>
      <div className="box-corousel">
        <input
          type="radio"
          name="slider"
          className="d-none"
          id="s1"
          checked={selectedSlide === "s1"}
          onChange={handleRadioChange || handleClick}
        />
        <input
          type="radio"
          name="slider"
          className="d-none"
          id="s2"
          checked={selectedSlide === "s2"}
          onChange={handleRadioChange || handleClick}
        />
        <input
          type="radio"
          name="slider"
          className="d-none"
          id="s3"
          checked={selectedSlide === "s3"}
          onChange={handleRadioChange || handleClick}
        />

        <div className="cards">
          <label htmlFor="s1" id="slide1">
            <div className="card">
              <div className="image">
                <img src={open} alt="" />
              </div>
            </div>
          </label>

          <label htmlFor="s2" id="slide2">
            <div className="card">
              <div className="image">
                <img src={music} alt="" />
              </div>
            </div>
          </label>
          <label htmlFor="s3" id="slide3">
            <div className="card">
              <div className="image">
                <img src={table} alt="" />
              </div>
            </div>
          </label>
        </div>
      </div>
      <FiArrowRightCircle className="btn-corou" onClick={handleClickRight}/>
    </div>
  );
}

export default corousel;

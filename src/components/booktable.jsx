import React, { useState } from 'react';
import "../assets/style/booktable.css";
import image1 from '../assets/image/image1.png';
import image2 from '../assets/image/image2.png';
import image3 from '../assets/image/image3.png';

function Table() {
  const [prohibitBoxes, setProhibitBoxes] = useState([true,,false,false,false,false,false,false,false,false])
  const [selectedBoxes, setSelectedBoxes] = useState(Array(10).fill(false));

  const handleBoxClick = (boxIndex) => {
    if (prohibitBoxes[boxIndex]) {
      return;
    }
    const updatedBoxes = [...selectedBoxes];
    updatedBoxes[boxIndex] = !updatedBoxes[boxIndex];
    setSelectedBoxes(updatedBoxes);
  };

  const renderBoxes = () => {
    const boxes = [];

    for (let i = 0; i < 10; i++) {
      const Prohibit = prohibitBoxes[i];
      const isSelected = selectedBoxes[i];
      const image = Prohibit ? image3 : isSelected ? image2 : image1;

      boxes.push(
        <div
          key={i}
          className={`table ${isSelected ? 'selected' : ''}`}
          onClick={() => handleBoxClick(i)}
        >
          <img src={image} alt={`Image ${i + 1}`} />
        </div>
      );
    }

    return boxes;
  };

  return (
    <div className="table-page">
      <div className="table-container">{renderBoxes()}</div>
    </div>
  );
}

export default Table;
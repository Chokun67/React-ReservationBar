import React, { useState ,useEffect} from 'react';
import "../assets/style/booktable.css";
import image1 from '../assets/image/image1.png';
import image2 from '../assets/image/image2.png';
import image3 from '../assets/image/image3.png';
import Slide from '../components/bottomsheet.jsx';
import { API } from '../assets/api/authen';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Table({ selectedDate }) {
  const [selectedBoxes, setSelectedBoxes] = useState(Array(10).fill(false));
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [testTable, settestTable] = useState([]);
  const [apiDataReady, setApiDataReady] = useState(false);
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies.token){
      navigate("/login");
      return
    }
    if(!selectedDate.includes("undefined")){
      API.fetchTableData(cookies.token,selectedDate).then((response) => {
        console.log('POST Response:', response.data);
        settestTable(response.data);
        setApiDataReady(true);
      })
      .catch((error) => {
        console.error('POST Error:', error);
        // navigate("/login");
      });
    }
  }, [selectedDate]);

  const handleBoxClick = (boxIndex) => {
    if (testTable[boxIndex].State) {
      return;
    }
    // const updatedBoxes = [...selectedBoxes];
    // updatedBoxes[boxIndex] = !updatedBoxes[boxIndex];
    // setSelectedBoxes(updatedBoxes);
    const updatedBoxes = selectedBoxes.map((value, index) => (index === boxIndex ? !value : false));
    setSelectedBoxes(updatedBoxes);
  };

    const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 10; i++) {
      const Prohibit = testTable[i].State;
      const isSelected = selectedBoxes[i];
      const image = Prohibit ? image3 : isSelected ? image2 : image1;
      {selectedBoxes.some((isSelected) => isSelected)}
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
      {apiDataReady && ( // เช็คว่า API เสร็จสิ้นหรือยัง
        <>
          <div className="table-container">{renderBoxes()}</div>
          {selectedBoxes.some((isSelected) => isSelected) && (
            <Slide selectedBoxes={testTable
              .filter((_, index) => selectedBoxes[index])
              .map(obj => obj._id)} selectedDate={selectedDate} />
          )}
        </>
      )}
    </div>
  );
}

export default Table;
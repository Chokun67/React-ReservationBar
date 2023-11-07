import React, { useState } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/navi.jsx";

function DetailReserve() {
  const [activeTab, setActiveTab] = useState("Reservation"); // กำหนด Tab เริ่มต้นเป็น 'Reservation'

  const openTab = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter flex-row">
            <div className="box-confirm-table flex-row">
                <div className="flex-part1 flex-column">
                
                </div>
                <div className="flex-part1">
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailReserve;
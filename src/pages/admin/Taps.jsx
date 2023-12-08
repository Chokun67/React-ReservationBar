import React, { useState } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/naviadmin";
import StatusAdmin from "./Status";
import Cancellation from "./Cancellation";


function Tabsmain() {
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
          <div className="boxcenter">
            <div className="box-tap flex-column">
              <div className="flex-column">
              <div className="tab">
                <button
                  className={`tablinks ${activeTab == "Reservation" ? "active" : ""}`}
                  onClick={() => openTab("Reservation")}>
                  Reservation
                </button>
                <button
                  className={`tablinks ${activeTab == "Cancellation" ? "active" : ""}`}
                  onClick={() => openTab("Cancellation")}>
                  Cancellation
                </button>
              </div>
              <div
                id="Reservation"
                className={`tabcontent ${
                activeTab === "Reservation" ? "tapactive" : ""}`}>
                <StatusAdmin />
              </div>
              <div
                id="Cancellation"
                className={`tabcontent ${
                activeTab === "Cancellation" ? "tapactive" : ""
                }`}>
                <Cancellation/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabsmain;

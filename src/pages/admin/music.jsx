import React, { useState,useEffect } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/naviadmin.jsx";
import { useNavigate } from "react-router-dom";
import { API_Customer } from '../../assets/api/customer';
import { useCookies } from 'react-cookie';

function MusicDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [activeTab, setActiveTab] = useState("Reservation"); // กำหนด Tab เริ่มต้นเป็น 'Reservation'
  const [quece, setQuece] = useState([]);
  const navigate = useNavigate();
  const handleGoURL = () => {
    navigate("/reserve/refund");
  };
  useEffect(()=>{
    API_Customer.queueMusic(cookies.token)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        setQuece(response.data);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  }, []);
  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="box-tap flex-column">
              <div className="flex-column">
                <div className="status-box3 flex-column">
                  <table>
                    <thead>
                      <tr className="tr-admin">
                        <th>USER ID</th>
                        <th>USERNAME</th>
                        <th>SONG</th>
                        <th>ARTIST</th>
                        <th>LINK</th>
                      </tr>
                    </thead>
                    <tbody>
                    {quece?(quece.map((rowData, index) => (
                     <tr key={index}>
                      <td>{rowData.user_id}</td>
                      <td>{rowData.user_id}</td>
                      <td>{rowData.name_song}</td>
                      <td>{rowData.message}</td>
                      <td>{rowData.url}</td>
                      </tr>
                      ))):(
                        <tr>
                          <td colSpan="5">ไม่มีเพลงที่ถูก request</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicDashboard;

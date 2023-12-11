import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/music.css";
import { API } from "../assets/api/authen";
import { useCookies } from "react-cookie";
import { useNavigate ,useParams} from "react-router-dom";
import swalactive from "../components/swalfire.jsx";

function StatusDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [selecteddata, setSelecteddata] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleGoURL = () => {
    navigate(`/reserve/refund/${selecteddata._id}`);
  };

  useEffect(() => {
    API.getMyReservation(cookies.token)
      .then((response) => {
        setSelecteddata(response.data[id]);
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
            <h1>Reservation Status</h1>
            <div className="Status-box flex-column">
              <div className="flex-row">
                <div className="flex-part1 status-text">
                  <p>reservation id</p>
                  <p>table</p>
                  <p>Amount</p>
                  <p>timestamp</p>
                  <p>date</p>
                  <p>status</p>
                </div>
                <div className="flex-part1">
                  <p>{selecteddata._id}</p>
                  <p>{selecteddata.table_id}</p>
                  <p>1</p>
                  <p>{selecteddata.timestamp}</p>
                  <p>{selecteddata.arrival}</p>
                  <p>{selecteddata.status}</p>
                </div>
              </div>
              <p>---- thank you ----</p>
            </div>
            <button className="right-border-button" onClick={() => handleGoURL()}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusDetail;

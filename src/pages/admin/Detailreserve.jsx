import React, { useState ,useEffect} from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/naviadmin.jsx";
import "../../assets/style/admins/Status.css";
import { useNavigate ,useParams} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { API_Customer } from '../../assets/api/customer';

function DetailReserve() {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { id } = useParams();
  const handleGoURL = () => {
    navigate("/reserve/refund");
  };

  const handleConfirm = (confirm) => {
    const confirmdata = {
      "reserve_id": reservationData._id,
      "state": confirm
    }
    
    API_Customer.customer_confirm(cookies.token,confirmdata)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        navigate(-1);
      })
      .catch((error) => {
        console.error("POST Error:", error);
        
      });
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    API_Customer.getDetailResevation(cookies.token)
    .then((response) => {
      console.log(response.data[id]);
      setReservationData(response.data[id]);
    })
    .catch((error) => {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      navigate('/admin/login');
    });
  }, []);

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="box-row">
            <div className="box-confirm-status">
              <div className="closebutton" onClick={handleGoBack}>
                <span className="closebar1"></span>
                <span className="closebar2"></span>
              </div>
              <div className="box-confirm-table flex-col">
                <div className="textleft">
                  <h2 className="detailtext">STATUS</h2> 
                </div>
                <div className="flex-row">
                  <div className="flex-part1 status-detail">
                    
                    <p>RESERVATION ID: {reservationData._id}<br/>
                    USER ID: {reservationData.user_id}<br/>
                    USER NAME: {reservationData.nameUser}<br/>
                    TABLE: {reservationData.table_id}<br/>
                    AMOUNT: 1<br/>
                    TIMESTAMP: {reservationData.timestamp}<br/>
                    DATE: {reservationData.arrival}<br/>
                    LIQUOR: {reservationData.drink_id}</p>
                  </div>
                  <div className="flex-part1">
                    <div className="pic-statement">
                      <img src={`http://10.32.69.204:7000/image/${reservationData.statement}`} alt="รูปภาพการโอน" />
                    </div>
                  </div>
                </div>
                <div className="buttoncenterrow">
                 <button className="right-border-button"onClick={()=>handleConfirm(false)}>Cancel</button>
                 <span class="space-between-buttons"></span>
                 <button className="left-border-button" onClick={()=>handleConfirm(true)}>Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailReserve;

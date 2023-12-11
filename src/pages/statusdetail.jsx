import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/music.css";
import { API } from "../assets/api/authen";
import { useCookies } from "react-cookie";
import { useNavigate ,useParams} from "react-router-dom";
import Swal from "sweetalert2";

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
    if(!cookies.token){
      navigate("/login");
      return
    }
    API.getMyReservation(cookies.token)
      .then((response) => {
        setSelecteddata(response.data[id]);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  }, []);

  const timestampDate = new Date(selecteddata.timestamp);

const optionsDate = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

const swalyesno =()=>{
  swalWithBootstrapButtons.fire({
    title: 'Are you sure you want to cancel this reservation?',
    html: "1. If you cancel 1-2 day before your reservation date, we will transfer back your money full amount. <br/>2. Otherwise, we will deduct those money as cancellation charges.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      handleGoURL()
    } 
  });
}

const formattedDate = timestampDate.toLocaleString(undefined, optionsDate);
  
  const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedTime = timestampDate.toLocaleTimeString(undefined, optionsTime);

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
                  <p>.</p>
                  <p>date</p>
                  <p>status</p>
                </div>
                <div className="flex-part1" >
                <p>{selecteddata._id}</p>
                  <p>{selecteddata.table_id}</p>
                  <p>1</p>
                  <p>{formattedDate}</p>
                  <p>{formattedTime}</p>
                  <p>{selecteddata.arrival}</p>
                  <p style={{
                            color:
                            selecteddata.status === "waiting"
                                ? "#fbbc05"
                                : selecteddata.status === "cancel-owner" ||
                                selecteddata.status === "cancel-customer"
                                ? "red"
                                : selecteddata.status === "confirm"
                                ? "green"
                                : "inherit",
                                textDecoration:"underline"
                          }}>{selecteddata.status}</p>
                </div>
              </div>
              <p>---- thank you ----</p>
            </div>
            <button className="right-border-button" onClick={() => swalyesno()}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusDetail;

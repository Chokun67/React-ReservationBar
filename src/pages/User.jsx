import React, { useState, useEffect } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import profile from "../assets/image/profile.png";
import { useNavigate } from "react-router-dom";
import { API } from "../assets/api/authen";
import { useCookies } from "react-cookie";

function User() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    username: "",
    password: "",
    telephone: "",
    birthday: "",
  });
  const [myReserve, setMyReserve] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์หรือทำอย่างอื่นตามต้องการ
    console.log(formData);
  };
  const navigate = useNavigate();
  const goEdit = () => {
    navigate("/editprofile");
  };
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if(!cookies.token){
      navigate("/login");
      return
    }
    API.fetchPersonaleData(cookies.token)
      .then((response) => {
        console.log("POST Response:", response.data);
        const separatedname = response.data.name.split(" ");
        setFormData({
          firstName: separatedname[0],
          lastName: separatedname[1],
          gender: response.data.gender,
          username: response.data.username,
          password: response.data.password,
          telephone: response.data.phone,
          birthday: response.data.birthday,
        });
      })
      .catch((error) => {
        console.error("POST Error:", error);
        // navigate("/login");
      });

    API.getMyReservation(cookies.token)
      .then((response) => {
        console.log("POST Response:", response.data);
        setMyReserve(response.data);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  }, []);

  return (
    <>
      <div className="full-screen-bg-user">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="user-box flex-between">
              <div className="left-user flex-column">
                <div className="profilepic">
                  <img src={profile} alt="Your profile" />
                </div>
                <div className="orbiton">Satoru Gojo</div>
                <div className="orbiton">@thehonoredgojo</div>
                <div className="grid-user">
                  <div className="detail-user">
                    <div className="name">First Name:</div>
                    <p>{formData.firstName}</p>
                  </div>
                  <div className="detail-user">
                    <div className="name">Last Name:</div>
                    <p>{formData.lastName}</p>
                  </div>
                  <div className="detail-user">
                    <div className="name">Gender</div>
                    <p>{formData.gender}</p>
                  </div>
                  <div className="detail-user">
                    <div className="name">Birthday</div>
                    <p>{formData.birthday}</p>
                  </div>
                  <div className="detail-user">
                    <div className="name">Tel. number:</div>
                    <p>{formData.telephone}</p>
                  </div>
                  <div className="detail-user"></div>
                  <div className="detail-user">
                    <div className="name">Username</div>
                    <p>{formData.username}</p>
                  </div>
                  <div className="detail-user">
                    <div className="name">Password</div>
                    <p>*******</p>
                  </div>
                </div>
                <button className="right-border-button" onClick={goEdit}>
                  Edit profile
                </button>
              </div>
              <hr />
              <div className="right-user flex-column">
                <h2>
                  Reservation <br />
                  History
                </h2>
                <ul>
                  {myReserve ? (
                    myReserve.map((item, index) => (
                      <li key={index}>{item.arrival}: 1 table</li>
                    ))
                  ) : (
                    <li>No reservations yet.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

import React, { useState,useEffect } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/naviadmin.jsx";
import { useNavigate } from "react-router-dom";
import { API_Customer } from '../../assets/api/customer';
import { useCookies } from 'react-cookie';

function UserDashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    API_Customer.getAllUser(cookies.token)
      .then((response) => {
        console.log("POST Resrvation:", response.data);
        setUserdata(response.data);
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
                        <th>LASTNAME</th>
                        <th>FIRSTNAME</th>
                        <th>BIRTHDAY</th>
                        <th>GENDER</th>
                        <th>TEL.</th>
                        <th>USERNAME</th>
                      </tr>
                    </thead>
                    <tbody>
                    {userdata.map((rowData, index) => (
                     <tr key={index}>
                      <td>{rowData._id}</td>
                      <td>{rowData.name}</td>
                      <td>{rowData.name}</td>
                      <td>{rowData.birthday}</td>
                      <td>{rowData.gender}</td>
                      <td>{rowData.phone}</td>
                      <td>{rowData.username}</td>
                      </tr>
                      ))}
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

export default UserDashboard;

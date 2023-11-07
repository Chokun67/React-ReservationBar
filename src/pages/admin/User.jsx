import React, { useState } from "react";
import "../../assets/style/admins/Taps.css";
import Navi from "../../components/navi.jsx";
import { useNavigate } from "react-router-dom";

function UserDashboard() {

  const navigate = useNavigate();

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
                      <tr>
                        <td>ข้อมูล 1</td>
                        <td>ข้อมูล 2</td>
                        <td>ข้อมูล 3</td>
                        <td>ข้อมูล 4</td>
                        <td>ข้อมูล 5</td>
                        <td>ข้อมูล 6</td>
                        <td>ข้อมูล 7</td>
                      </tr>
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

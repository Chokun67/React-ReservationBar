import React from "react";
import "../assets/style/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="section-foot">
          <div className="service">
            <h3>CONTACT US</h3>
            <p>Telephone: 02-2222222 </p>
            <p>Email: laorian@gmail.com</p>
            <p>LINE: @laorian</p>
          </div>
          <div className="followus"></div>
        </div>
        <div className="section-foot">
          <div className="service">
            <h3>Business Hour</h3>
            <ul>
              <li>
                Monday - Friday <br />
                18:00 - 02:00
              </li>
              <li>
                Saturday - Sunday <br />
                17:00 - 03:00
              </li>
            </ul>
          </div>
        </div>
        <div className="section-foot">
          <div className="service">
            <h3>customer service</h3>
            <ul>
              <li>Reservations</li>
              <li>Request songs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

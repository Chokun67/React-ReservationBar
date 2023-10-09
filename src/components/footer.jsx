import React from "react";
import "../assets/style/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="section-foot">
          <div className="contact">
            <h3>CONTACT US</h3>
            <p>Telephone: 02-2222222 </p>
            <p>Email: laorian@gmail.com</p>
            <p>LINE: @laorian</p>
          </div>
          <div className="followus"></div>
        </div>
        <div className="section-foot">
          <div className="hour">
          <h3>Business Hour</h3>
          <p>Monday - Friday</p>
          <p> 18:00 - 02:00</p>
          <p>Saturday - Sunday</p>
          <p>17:00 - 03:00 </p>
          </div>
        </div>
        <div className="section-foot">
         <div className="service">
         <h3>customer service</h3>
          <p>FAQ</p>
          <p>Blog</p>
         </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

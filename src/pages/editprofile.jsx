import React, { useState, useEffect } from "react";
import "../assets/style/user.css";
import Navi from "../components/navi.jsx";
import { AiOutlineCheck } from "react-icons/ai";
import profile from "../assets/image/profile.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { API } from "../assets/api/authen";
import swalactive from "../components/swalfire.jsx";

function Edituser() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [formIsValid, setFormIsValid] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "ชาย",
    username: "",
    phone: "",
    birthday: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
  });

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
      return;
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
          phone: response.data.phone,
          birthday: response.data.birthday,
        });
      })
      .catch((error) => {
        console.error("POST Error:", error);
        // navigate("/login");
      });
    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z]+$/.test(value)) {
        newErrors[name] = "กรุณากรอกเฉพาะตัวอักษร";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "phone") {
      if (value.length != 10) {
        newErrors[name] = "กรุณากรอกเบอร์โทรให้ครบถ้วน";
      } else {
        delete newErrors[name];
      }
    }
    if (name === "username") {
      // if(!value.includes("@")){
      //   newErrors[name] = "Username must be a  email address format.";
      // }
      // else
      if (value.length < 8) {
        newErrors[name] = "Username must be at least 8 characters";
      } else {
        delete newErrors[name];
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setFormIsValid(!hasErrors);
  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    if (!formIsValid || !Object.values(errors).every((error) => !error)) {
      return swalactive("error", "Please check your form");
  }
  if (!Object.values(formData).every((value) => value !== "")) {
      return swalactive("error", "Please fill out all fields");
  }
  const fullName = formData.firstName && formData.lastName
  ? `${formData.firstName} ${formData.lastName}`
  : null;

const finalFormData = { ...formData };
if (fullName) {
  finalFormData.name = fullName;
  delete finalFormData.firstName;
  delete finalFormData.lastName;
}

console.log(finalFormData);
    API.user_updateinfo(cookies.token, finalFormData)
      .then((response) => {
        console.log("POST Response:", response.data);
        swalactive("success", "Update information success.");
        navigate('/user');
      })
      .catch((error) => {
        console.error("POST Error:", error);
        swalactive("error", "Update information error.");
      });
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <div className="user-box flex-column">
              <form className="edit-form" onSubmit={handleSubmit}>
                <div className="picuser-center">
                  <div className="profilepic2">
                    <img src={profile} alt="Your profile" />
                  </div>
                </div>
                <div className="name-container">
                  <div>
                    <label>First Name:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        borderBottom: errors.firstName ? "1px solid red" : "",
                      }}
                    />
                    {errors.firstName && (
                      <p className="error-message ">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label>Last Name:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        borderBottom: errors.lastName ? "1px solid red" : "",
                      }}
                    />
                    {errors.lastName && (
                      <p className="error-message ">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="name-container">
                  <div>
                    <label>Gender:</label>
                    <select
                      name="gender"
                      className="selectGender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="ชาย">ชาย</option>
                      <option value="หญิง">หญิง</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                  <div>
                    <label>Birthday:</label>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="name-container">
                  <div>
                    <label>telephone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        borderBottom: errors.phone ? "1px solid red" : "",
                      }}
                    />
                    {errors.phone && (
                      <p className="error-message ">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <button type="submit" className="left-border-button">
                    confirm <AiOutlineCheck />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edituser;

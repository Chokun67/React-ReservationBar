import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/music.css";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BsMusicNote ,BsFillPersonFill} from "react-icons/bs";
import headphone from "../assets/image/headphone.png";
import { API } from '../assets/api/authen';
import { useCookies } from 'react-cookie';

function Music() {
  const [formData, setFormData] = useState({
    name_song: "",
    url: "",
    message: "",
    
  });
  const [cookies, setCookie, removeCookie] = useCookies(['token']);  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    API.requestMusic(cookies.token,formData)
      .then((response) => {
        console.log('POST Response:', response.data);
      })
      .catch((error) => {
        console.error('POST Error:', error);
      });
  };

  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <h1>REQUEST FOR MUSIC</h1>
            <div className="musicbox flex-column">
              <form onSubmit={handleSubmit}>
              <div className="top">
                <div className="phone">
                  <img src={headphone} alt="Your Logo" />
                </div>

                <div className="sidephone">
                  <div className="song">
                    <div className="left-a">
                      <BsMusicNote className="icons-top" />
                    </div>
                    <div className="right">
                      <label htmlFor="song">Song:</label>
                      <input
                        type="text"
                        id="song"
                        name="name_song"
                        value={formData.name_song}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="song">
                    <div className="left-a">
                    <BsFillPersonFill className="icons-top"/>
                    </div>
                    <div className="right">
                      <label htmlFor="artist">Artist:</label>
                      <input
                        type="text"
                        id="artist"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mid">
                <div className="left-b">
                  <FaYoutube className="FaYoutube" />
                </div>
                <div className="right">
                  <label htmlFor="youtube">Youtube Link:</label>
                  <input
                    type="text"
                    id="youtube"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="bottom">
                <button className="left-border-button" type="submit">
                  Confirm <AiOutlineCheck />
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

export default Music;

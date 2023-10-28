import React, { useState, useEffect } from "react";
import Navi from "../components/navi.jsx";
import "../assets/style/music.css";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BsMusicNote ,BsFillPersonFill} from "react-icons/bs";
import headphone from "../assets/image/headphone.png";

function Music() {
  const [formData, setFormData] = useState({
    song: "",
    artist: "",
    youtube: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="full-screen-bg-music">
        <div className="firstpage">
          <Navi />
          <div className="boxcenter">
            <h1>REQUEST FOR MUSIC</h1>
            <div className="musicbox flex-column">
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
                      <label htmlFor="song">song:</label>
                      <input
                        type="text"
                        id="song"
                        name="song"
                        value={formData.song}
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
                        name="artist"
                        value={formData.artist}
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
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="bottom">
                <button className="left-border-button">
                  confirm <AiOutlineCheck />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;

import React from "react";
import "../css/App.css";
import LeonLogo from '../assets/leonimage.png'
// import backgroundimg from '../assets/backgroundimg.png';
import leonimage from "../assets/leonimage.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";

const PlayScreen = () => {
  return (
    <div className="container">
        <div className="header">
          <img src={LeonLogo} alt="Lion" className="lion-icon" />
        </div>
        <div className="main-content">
          <h1>LEON</h1>
          <img src={leonimage} alt="Lion" className="lion-image" />
          <a className="play-button">PLAY NOW</a>
          <p className="stay-tuned">Stay tuned</p>
          <p className="more-info">More info at our official channels</p>
          <div className="social-icons">
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={telegram} alt="Telegram" />
          </div>
        </div>
      
    </div>
  );
};

export default PlayScreen;

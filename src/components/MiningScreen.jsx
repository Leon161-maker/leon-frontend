import React from "react";
import "../css/MiningScreen.css";
import coin from "../assets/HomeScreenImages/coin.png";
import airdropicon from "../assets/HomeScreenImages/airdropicon.png";
import dollarcoin from "../assets/HomeScreenImages/dollarcoin.png";
import inviteicon from "../assets/HomeScreenImages/inviteicon.png";
import lion from "../assets/HomeScreenImages/lion.png";
import powericon from "../assets/HomeScreenImages/powericon.png";
import tapicon from "../assets/HomeScreenImages/tapicon.png";
import taskicon from "../assets/HomeScreenImages/taskicon.png";
import { useState } from "react";

function MiningScreen() {
const[count, Setcount] = useState(0);
    const Increment = () =>{
      Setcount(count+1);
    }
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <button className="button">
            {" "}
            <img src={coin}></img> Purren Name
          </button>
          <button className="button">
            {" "}
            <img src={lion}></img> Linked Exchange
          </button>
        </div>
        <div className="main">
          <div className="status">
            <div className="status-item">
              <button className="statusbutton status-title">
                Daily Task
                <div className="img-text-div">
                  <img src={dollarcoin}></img> <span>2X</span>
                </div>
              </button>
              <button className="statusbutton status-level">
                Level
                <div className="img-text-div">
                  <img src={dollarcoin}></img>
                  <span>5K</span>
                </div>
              </button>
              <button className="statusbutton status-task">
                Daily Task
                <div className="img-text-div">
                  <img src={dollarcoin}></img>
                  <span>0</span>
                </div>
              </button>
            </div>
          </div>
          <div className="balance">
            <div className="balance-amount">
              <img src={dollarcoin} alt="Dollar Coin" className="dollar-coin" />
             {count}
            </div>
            <div className="level-progress">
              <div className="progress-bar"></div>
              <span className="progress-level">Level 2/10</span>
            </div>
          </div>

          <div className="lion" onClick={Increment}>
            <img src={coin} alt="Lion" />
          </div>
        </div>
        <div className="energy">
          <img src={powericon} alt="Energy" /> 1500/2000
        </div>
        <div className="footer">
          <div className="navigation">
            <div className="nav-item">
              <img src={tapicon} alt="Home" />
              <span>Home</span>
            </div>
            <div className="nav-item">
              <img src={taskicon} alt="Task" />
              <span>Task</span>
            </div>
            <div className="nav-item">
              <img src={inviteicon} alt="Invite" />
              <span>Invite</span>
            </div>
            <div className="nav-item">
              <img src={airdropicon} alt="Airdrop" />
              <span>Airdrop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiningScreen;

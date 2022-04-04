import React from "react";
import "../styles/StackMyNfts.css";
import fire from "../assets/images/fire.png";
import air from "../assets/images/air.png";
import earth from "../assets/images/earth.png";
import water from "../assets/images/water.PNG";

export default function StackMyNfts() {
  return (
    <div className="stack-interface">
      <div className="col col1">
        <div className="containerr">
          <div className="containerr-title">
            <p>FIRE NODES</p>
          </div>
          <div className="nfts-container"></div>
          <button className="stake-btn">STAKE FIRE</button>
        </div>
        <div className="containerr">
          <div className="containerr-title">
            <p>AIR NODES</p>
          </div>
          <div className="nfts-container">
            <div className="card">
              <div className="card-img">
                <img src={air} alt="" />
              </div>
              <div className="card-description">
                <p>AIR #491</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={air} alt="" />
              </div>
              <div className="card-description">
                <p>AIR #491</p>
              </div>
            </div>
          </div>
          <button className="stake-btn">STAKE EPIC</button>
        </div>
        <div className="containerr">
          <div className="containerr-title">
            <p>EARTH NODES</p>
          </div>
          <div className="nfts-container">
            <div className="card">
              <div className="card-img">
                <img src={earth} alt="" />
              </div>
              <div className="card-description">
                <p>Earth #1043</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={earth} alt="" />
              </div>
              <div className="card-description">
                <p>Earth #1042</p>
              </div>
            </div>
          </div>
          <button className="stake-btn">STAKE EARTH</button>
        </div>
        <div className="containerr">
          <div className="containerr-title">
            <p>WATER</p>
          </div>
          <div className="nfts-container">
            <div className="card">
              <div className="card-img">
                <img src={water} alt="" />
              </div>
              <div className="card-description">
                <p>Water #5342</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={water} alt="" />
              </div>
              <div className="card-description">
                <p>Water #9763</p>
              </div>
            </div>
          </div>
          <button className="stake-btn">STAKE WATER</button>
        </div>
      </div>
      <div className="col col2">
        <div className="containerr">
          <div className="containerr-title">
            <p>STAKED FIRE NODES</p>
          </div>
          <div className="rewnfts">
            <div className="rewards-container">
              <p>
                Rewards : 208 <span className="token">$ELMT</span>
              </p>
            </div>
            <div className="nfts-container">
              <div className="card">
                <div className="card-img">
                  <img src={fire} alt="" />
                </div>
                <div className="card-description">
                  <p>FIRE #218</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={fire} alt="" />
                </div>
                <div className="card-description">
                  <p>FIRE #123</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={fire} alt="" />
                </div>
                <div className="card-description">
                  <p>FIRE #333</p>
                </div>
              </div>
            </div>
          </div>
          <button className="stake-btn">UNSTAKE FIRE</button>
        </div>
        <div className="containerr">
          <div className="containerr-title">
            <p>STAKED AIR NODES</p>
          </div>
          <div className="rewnfts">
            <div className="rewards-container">
              <p>
                Rewards : 208 <span className="token">$ELMT</span>
              </p>
            </div>
            <div className="nfts-container"></div>
          </div>
          <button className="stake-btn">UNSTAKE AIR</button>
        </div>
        <div className="containerr">
          <div className="containerr-title">
            <p>STAKED EARTH </p>
          </div>
          <div className="rewnfts">
            <div className="rewards-container">
              <p>
                Rewards : 208 <span className="token">$ELMT</span>
              </p>
            </div>
            <div className="nfts-container"></div>
          </div>
          <button className="stake-btn">UNSTAKE EARTH</button>
        </div>
        <div className="containerr">
          <div className="containerr-title">
            <p>STAKED WATER NODES</p>
          </div>
          <div className="rewnfts">
            <div className="rewards-container">
              <p>
                Rewards : 208 <span className="token">$ELMT</span>
              </p>
            </div>
            <div className="nfts-container"></div>
          </div>
          <button className="stake-btn">UNSTAKE WATER</button>
        </div>
      </div>
    </div>
  );
}

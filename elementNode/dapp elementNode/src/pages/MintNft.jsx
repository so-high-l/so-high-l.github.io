import React, { useState } from "react";
import "../styles/mintNfts.css";

export default function MintNft() {
  const [tab, setTab] = useState("tab-egg");

  return (
    <div className="mint-interface">
      <div className="row row1">
        <h1 className="title">MINT ELEMENT NODES</h1>
      </div>
      <div className="row row2">
        <div className="coll">
          <ul className="nav-tabs nav nav-tabs">
            <li onClick={() => setTab("tab-egg")} className="nav-item">
              <button
                id="egg-btn"
                className={`btn ${tab === "tab-egg" && "active"}`}
              >
                FIRE
              </button>
            </li>
            <li onClick={() => setTab("tab-rare")} className="nav-item">
              <button
                id="rare-btn"
                className={`btn ${tab === "tab-rare" && "active"}`}
              >
                SILVER
              </button>
            </li>
            <li onClick={() => setTab("tab-epic")} className="nav-item">
              <button
                id="epic-btn"
                className={`btn ${tab === "tab-epic" && "active"}`}
              >
                EARTH
              </button>
            </li>
            <li onClick={() => setTab("tab-common")} className="nav-item">
              <button
                id="common-btn"
                className={`btn ${tab === "tab-common" && "active"}`}
              >
                WATER
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {tab === "tab-egg" && (
              <div className="tab-pane" id="tab-egg">
                <div className="wallet-connection">
                  <button className="btn mint-btn">FIRE</button>
                </div>
              </div>
            )}

            {tab === "tab-rare" && (
              <div className="tab-pane" id="tab-rare">
                <div className="wallet-connection">
                  <button className="btn mint-btn">SILVER</button>
                </div>
              </div>
            )}

            {tab === "tab-epic" && (
              <div className="tab-pane" id="tab-epic">
                <div className="wallet-connection">
                  <button className="btn mint-btn">EARTH</button>
                </div>
              </div>
            )}

            {tab === "tab-common" && (
              <div className="tab-pane " id="tab-common">
                <div className="wallet-connection">
                  <button className="btn mint-btn">WATER</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

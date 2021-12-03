import React from "react";
import "./plus.css";

function Plus() {
  return (
    <div className="plus">
      <div className="top">
        <h2>Plus</h2>
      </div>

      <div className="bottom">
        <div className="menu">
          <div className="logo_container">
            <img alt="" src="./assets/menu.svg" />
          </div>
          <h3>Menu repas</h3>
        </div>

        <div className="affluences">
          <div className="logo_container">
            <img alt="" src="./assets/affluences.svg" />
          </div>
          <h3>Disponibilités et affluences</h3>
        </div>

        <div className="fidelite">
          <div className="logo_container">
            <img alt="" src="./assets/fidelite.svg" />
          </div>
          <h3>Mes points fidélité</h3>
        </div>

        <div className="apropos">
          <div className="logo_container">
            <img alt="" src="./assets/apropos.svg" />
          </div>
          <h3>A propos</h3>
        </div>
      </div>
    </div>
  );
}

export default Plus;

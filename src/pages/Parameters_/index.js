import React from "react";
import { Link } from "react-router-dom";
import "./Parameters.css";

function Parameters() {
  return (
    <div className="plus">
      <div className="top">
        <h2>Paramètres</h2>
      </div>

      <div className="bottom">
        <Link to="/MyCards">
          <div className="menu">
            <div className="logo_container">
              <img alt="" src="./assets/wallet.svg" />
            </div>
            <h3>Mes cartes bancaires</h3>
          </div>
        </Link>

        <div className="affluences">
          <div className="logo_container">
            <img alt="" src="./assets/More_square.svg" />
          </div>
          <h3>Mes coordonnées bancaires</h3>
        </div>

        <div className="fidelite">
          <div className="logo_container">
            <img alt="" src="./assets/Lock.svg" />
          </div>
          <h3>Sécurité</h3>
        </div>

        <div className="opposition">
          <div className="red_logo_container">
            <img alt="" src="./assets/Danger_circle.svg" />
          </div>
          <h3 className="red_h3">Faire opposition à mon compte</h3>
        </div>
      </div>
    </div>
  );
}

export default Parameters;

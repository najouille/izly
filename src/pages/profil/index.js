import React from "react";
import "./profil.css";

function Profil() {
  return (
    <div className="profil">
      <div className="top">
        <h2>Profil</h2>
      </div>

      <div className="bottom">
        <div className="menu">
          <div className="logo_container">
            <img src="./assets/Edit_square.svg" />
          </div>
          <h3>Modifier mes informations</h3>
        </div>

        <div className="affluences">
          <div className="logo_container">
            <img src="./assets/fidelite.svg" />
          </div>
          <h3>Mes badges Izly</h3>
        </div>

        <div className="fidelite">
          <div className="logo_container">
            <img src="./assets/Bookmark.svg" />
          </div>
          <h3>Mes restaurants</h3>
        </div>

        <div className="deconnexion">
          <div className="red_logo_container">
            <img src="./assets/Logout.svg" />
          </div>
          <h3 className="red_h3">Déconnexion</h3>
        </div>
      </div>
    </div>
  );
}

export default Profil;

import React from "react";
import {Link} from "react-router-dom";

function Parameters() {
  return (
      <div className="plus">

          <div className="top">
            <h1>Paramètres</h1>
          </div>

          <div className="bottom">

            <div className="menu">
            <div className="logo_container">
                <img src="./assets/menu.svg" />
            </div>
            <Link to="/MyCards">
              <h3>Mes cartes bancaires</h3>
              </Link> 
            </div>

            <div className="affluences">
            <div className="logo_container">
                <img src="./assets/affluences.svg" />
            </div>
              <h3>Mes coordonnées bancaires</h3>
            </div> 

            <div className="fidelite">
            <div className="logo_container">
                <img src="./assets/fidelite.svg" />
            </div>
              <h3>Sécurité</h3>
            </div> 

            <div className="apropos">
            <div className="logo_container">
                <img src="./assets/apropos.svg" />
            </div>
              <h3>Faire opposition à mon compte</h3>
            </div>

          </div>
      </div>
  );
}

export default Parameters;

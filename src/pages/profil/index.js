import React from "react";
import {Link} from "react-router-dom";

function Profil() {
    return (
        <div className="plus">
  
            <div className="top">
              <h1>Profil</h1>
            </div>
  
            <div className="bottom">
  
              <div className="menu">
              <div className="logo_container">
                  <img src="./assets/menu.svg" />
              </div>
                <h3>Modifier mes informations</h3>
              </div>
  
              <div className="affluences">
              <div className="logo_container">
                  <img src="./assets/affluences.svg" />
              </div>
                <h3>Mes badges Izly</h3>
              </div> 
  
              <div className="fidelite">
              <div className="logo_container">
                  <img src="./assets/fidelite.svg" />
              </div>
                <h3>Mes restaurants</h3>
              </div> 
  
              <div className="apropos">
              <div className="logo_container">
                  <img src="./assets/apropos.svg" />
              </div>
                <h3>Déconnexion</h3>
              </div>
  
            </div>
        </div>
    );
  }

export default Profil

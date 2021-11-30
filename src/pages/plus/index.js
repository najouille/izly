import React from "react"
import "./plus.css"

function Plus () {
  return (
      <div className="plus">

          <div className="top">
            <h1>Plus</h1>
          </div>

          <div className="bottom">

            <div className="menu">
            <div className="logo_container">
                <img src="./assets/menu.svg" />
            </div>
              <h3>Menu repas</h3>
            </div>  

            <div className="affluences">
              <h3>Disponibilités et affluences</h3>
              <img src="./assets/affluences.svg" />
              <img src="./assets/bouton.svg" />
            </div>

            <div className="fidelite">
              <h3>Mes points de fidélité</h3>
              <img src="./assets/fidelite.svg" />
              <img src="./assets/bouton.svg" />
            </div>

            <div className="apropos">
              <h3>A propos</h3>
              <img src="./assets/apropos.svg" />
              <img src="./assets/bouton.svg" />
            </div>

          </div>
      </div>
  );
}

export default Plus;

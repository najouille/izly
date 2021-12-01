import React from "react"
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="mystyle.css"></link>


const Navbar = () =>{
  return (
  <div>
      <div className="Accueil">
                <img src="./assets/menu.svg" />
    </div>
    <li>
      <Link to="/">Accueil</Link>
    </li>
    <li>
      <Link to="/plus">Plus</Link>
    </li>
    <li>
      <Link to="/pay">Payer</Link>
    </li>
    <li>
      <Link to="/parameters">Paramètres</Link>
    </li>
    <li>
      <Link to="/profil">Profil</Link>
    </li>
  </div>
  );
}
export default Navbar;
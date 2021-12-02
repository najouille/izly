import React from "react"
import { Link } from 'react-router-dom';
import "./navbar.css"


const Navbar = () =>{
  return (
  <div className="logo">
      <div className="Accueil">
      <Link to="/"><img src="./assets/Navbar/Bold/Home.svg" /></Link>
    </div>

      <div className="Plus">
      <Link to="Plus"><img src="./assets/Navbar/Bold/Plus.svg" /></Link>
    </div>

    <div className="Pay">
      <Link to="Pay"><img src="./assets/Navbar/Pay.svg" /></Link>
    </div>

    <div className="Parametre">
      <Link to="Parameters"><img src="./assets/Navbar/Bold/Setting.svg" /></Link>
    </div>

    <div className="Profil">
      <Link to="Profil"><img src="./assets/Navbar/Bold/Profile.svg" /></Link>
    </div>

  </div>
  );
}
export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "dayjs/locale/fr";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="logo">
      <div className="Accueil">
        <Link to="/">
          <img alt="" src="./assets/Navbar/Bold/Home.svg" />
        </Link>
      </div>

      <div className="Plus">
        <Link to="Plus">
          <img alt="" src="./assets/Navbar/Bold/Plus.svg" />
        </Link>
      </div>

      <div className="Pay">
        <Link to="QrCode">
          <img alt="" src="./assets/Navbar/Pay.svg" />
        </Link>
      </div>

      <div className="Parameters">
        <Link to="Parameters">
          <img alt="" src="./assets/Navbar/Bold/Setting.svg" />
        </Link>
      </div>

      <div className="Profil">
        <Link to="Profil">
          <img alt="" src="./assets/Navbar/Bold/Profile.svg" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

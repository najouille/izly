import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/">
        home
      </NavLink>
      <NavLink exact to="a-propos">
          plus
      </NavLink>
      <NavLink exact to="/">
        pay
      </NavLink><NavLink exact to="/">
        parameters
      </NavLink>
        profil
    </div>
  );
};

export default Navigation;
import React from "react";
import {Link} from "react-router-dom";

function Parameters() {
  return (
    <div>
      <h1>Paramètres</h1>
      <Link to="/MyCards">
        <input type="submit" value="Gérer mes cartes" />
      </Link>
    </div>
  );
}

export default Parameters;

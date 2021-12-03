import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Validation() {
  const [seconds, setSeconds] = useState(3); //j'initialise avec mon useState les seconds à "3"

  const navigate = useNavigate(); //useNavigate pour naviguer entre mes différentes pages

  useEffect(() => {
    const interval = setInterval(() => {
      //grace à mon useEffect je défini un interval de 1 secondes avec une condition
      if (seconds > 0) {
        // si la boucle est inf à 0 on navigue a la page home sinon on enleve une seconde
        setSeconds(seconds - 1);
      } else {
        navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="top-container">
      <div className="sold-container">
        <h2>Votre opération à été validé !</h2>
      </div>
      <p>Vous serez redirigé dans {seconds} secondes.</p>
      <Link to="/">
        <input type="submit" value="Retour" />
      </Link>
    </div>
  );
}

export default Validation;

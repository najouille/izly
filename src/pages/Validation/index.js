import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Validation() {
  const [seconds, setSeconds] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
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
        <h1>Votre opération à été validé !</h1>
      </div>
      <p>Vous serez redirigé dans {seconds} secondes.</p>
      <Link to="/">
        <input type="submit" value="Retour" />
      </Link>
    </div>
  );
}

export default Validation;

import React from "react";
import SetCard from "../../../components/SetCard";
import { Link } from "react-router-dom";
import "./MyCards.css";

function MyCards() {
  return (
    <div>
      <h1>Mes cartes</h1>
      <SetCard />
      <Link to="/AddCard">
        <input className="ajouter" type="submit" value="Ajouter une carte" />
      </Link>
    </div>
  );
}

export default MyCards;

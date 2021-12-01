import React from "react";
import SetCard from "../../../components/SetCard";
import useLocalState from "../../../utile/useLocaleState";
import {Link} from "react-router-dom";

function MyCards() {
    const [formResult] = useLocalState({}, "form_result_card");
    return (
      <div>
        <h2>hello</h2>
        <SetCard />
        <Link to="/AddCard">
            <input type="submit" value="Ajouter une carte" />
        </Link>
      </div>
    );
  }

export default MyCards;

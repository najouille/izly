import React from "react";
import useLocalState from "../../utile/useLocaleState";
import "./SetCard.css";

function SetCard() {
  const [formResult, setValue, deleteValue] = useLocalState({}, "form_result_card");
  console.log(formResult)
  return (
    <div>
      <div className="carte">
        <div> {formResult.Titulaire}</div>
        <div> {formResult.Numéro}</div>
        <div>Exp. {formResult.Expiration}</div>
        <div>CVV : {formResult.CVV}</div>
      </div>


      <button onClick={() => deleteValue()}>Supprimer carte</button>
    </div>
  );
}

export default SetCard;

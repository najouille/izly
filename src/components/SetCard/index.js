import React from "react";
import useLocalState from "../../utile/useLocaleState";

function SetCard() {
  const [formResult, setValue, deleteValue] = useLocalState({}, "form_result_card");
  console.log(formResult)
  return (
    <div>
      <h1>Mes cartes</h1>
      <pre>{JSON.stringify(formResult, null, 4)}</pre>
      <button onClick={() => deleteValue()}>Supprimer carte</button>
    </div>
  );
}

export default SetCard;

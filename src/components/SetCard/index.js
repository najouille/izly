import React from "react";
import useLocalState from "../../utile/useLocaleState";

function SetCard() {
  const [formResult] = useLocalState({}, "form_result_card");
  return (
    <div>
      <h1>Mes cartes</h1>
      <pre>{JSON.stringify(formResult, null, 4)}</pre>
    </div>
  );
}

export default SetCard;

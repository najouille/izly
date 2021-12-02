import React, { useState } from "react";
import useLocalState from '../../../utile/useLocaleState'

function AddCard() {
  const [formResult, setFormResult] = useLocalState({
    card_owner: "",
    card_number: "",
    card_expire: "",
    card_cvv: "",
  }, "form_result_card");

  const handleSubmit = (event) => {
    event.preventDefault();

    const { card_owner, card_number, card_expire, card_cvv } =
      event.target.elements;

    setFormResult({
      card_owner: card_owner.value,
      card_number: card_number.value,
      card_expire: card_expire.value,
      card_cvv: card_cvv.value,
    });
  };

  return (
    <div>
      <div>
        <h1>Mes cartes</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="nameImput">Titulaire de la carte</label>
          <input
            type="text"
            name="card_owner"
            defaultValue={formResult.card_owner}
            className="form-control"
            id="nameImput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="nameImput">Numéro de carte</label>
          <input
            type="text"
            name="card_number"
            defaultValue={formResult.card_number}
            className="form-control"
            id="nameImput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="nameImput">Date d'expiration</label>
          <input
            type="text"
            name="card_expire"
            defaultValue={formResult.card_expire}
            className="form-control"
            id="nameImput"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="emailImput">CVV</label>
          <input
            name="card_cvv"
            type="text"
            defaultValue={formResult.card_cvv}
            className="form-control"
            id="emailImput"
            placeholder="email@domain.com"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default AddCard;


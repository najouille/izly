import React from "react";
import useLocalState from "../../../utile/useLocaleState";

function AddCard() {
  const [formResult, setFormResult] = useLocalState(
    {
      card_number: "",
      card_expire: "",
      card_cvv: "",
      card_owner: "",
    },
    "form_result_card"
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);

    const { card_number, card_expire, card_cvv, card_owner } =
      event.target.elements;

    setFormResult({
      Numéro: card_number.value,
      Expiration: card_expire.value,
      CVV: card_cvv.value,
      Titulaire: card_owner.value,
    });
    window.location = "/MyCards";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameImput">Numéro de carte</label>
          <input
            type="text"
            name="card_number"
            defaultValue={formResult.card_number}
            className="form-control"
            id="nameImput"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameImput">Date d'expiration</label>
          <input
            type="text"
            name="card_expire"
            defaultValue={formResult.card_expire}
            className="form-control"
            id="nameImput"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailImput">CVV</label>
          <input
            name="card_cvv"
            type="text"
            defaultValue={formResult.card_cvv}
            className="form-control"
            id="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameImput">Titulaire de la carte</label>
          <input
            type="text"
            name="card_owner"
            defaultValue={formResult.card_owner}
            className="form-control"
            id="nameImput"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default AddCard;

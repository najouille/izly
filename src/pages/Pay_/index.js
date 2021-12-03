import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import "dayjs/locale/fr";

//les fonctions randomItem et handleDposit sont les memes pour la page de virements et de paiements par qr code je les détaille ici*/

function Pay() {
  const { transactions, setTransactions } = useContext(Context);

  function randomItem() {
    //foction qui associe "rechargement" à toutes les transactions effectuées depuis la page "recharger".
    var randomPlace = ["Rechargement"];
    return randomPlace;
  }

  function handleDeposit(transaction) {
    //foction qui gère les transactions, utilisant mon contexte
    setTransactions([...transactions, transaction]);
  }

  return (
    <div className="top-container">
      <Link to="/ChoicePay">
        <input type="submit" value="Retour" />
      </Link>
      <h2>Recharger</h2>
      <div className="sold-container">
        <Link to="/validation">
          <button
            className="top-load-money"
            onClick={() => {
              let random = randomItem();

              /*onclick on appel les deux fonctions, on affecte a handleDeposit "rechargement", un amount en fonction du montant sélectionné et une date de transaction pour pouvoir arranger l'historique des transactions par la suite */

              handleDeposit({
                random,
                amount: 10,
                transactionDate: new Date(),
              });
            }}
          >
            Recharger 10 €
          </button>
        </Link>
        <Link to="/validation">
          <button
            className="top-load-money"
            onClick={() => {
              let random = randomItem();
              handleDeposit({
                random,
                amount: 20,
                transactionDate: new Date(),
              });
            }}
          >
            Recharger 20 €
          </button>
        </Link>
        <Link to="/validation">
          <button
            className="top-load-money"
            onClick={() => {
              let random = randomItem();
              handleDeposit({
                random,
                amount: 30,
                transactionDate: new Date(),
              });
            }}
          >
            Recharger 30 €
          </button>
        </Link>
        <Link to="/validation">
          <button
            className="top-load-money"
            onClick={() => {
              let random = randomItem();
              handleDeposit({
                random,
                amount: 40,
                transactionDate: new Date(),
              });
            }}
          >
            Recharger 40 €
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pay;

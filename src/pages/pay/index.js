import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import dayjs from "dayjs";
import "dayjs/locale/fr";

function Pay() {
  const { transactions, setTransactions } = useContext(Context);

  function randomItem() {
    var randomPlace = ["Rechargement"];
    return randomPlace;
  }

  function handleDeposit(transaction) {
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

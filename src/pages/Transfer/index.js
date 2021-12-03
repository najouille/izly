import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../utile/context";
import "dayjs/locale/fr";

function Transfer() {
  const { transactions, setTransactions } = useContext(Context);
  const navigate = useNavigate();

  function randomItem() {
    var randomPlace = ["Virement"];
    return randomPlace;
  }

  function handleDeposit(transaction) {
    let solde = transactions.reduce((a, b) => a + b.amount, 0);
    if (solde + transaction.amount >= 0) {
      setTransactions([...transactions, transaction]);
      navigate("/Validation");
    } else {
      alert("Solde insuffisant. Veuillez recharger votre compte.");
      // window.location = "../Choice')
      navigate("/ChoicePay");
    }
  }
  return (
    <div className="top-container">
      <Link to="/ChoicePay">
        <input type="submit" value="Retour" />
      </Link>
      <h2>Vers un tiers</h2>
      <div className="sold-container">
        <button
          className="top-load-money"
          onClick={() => {
            let random = randomItem();
            handleDeposit({
              random,
              amount: -10,
              transactionDate: new Date(),
            });
          }}
        >
          Virer 10 €
        </button>
        <button
          className="top-load-money"
          onClick={() => {
            let random = randomItem();
            handleDeposit({
              random,
              amount: -20,
              transactionDate: new Date(),
            });
          }}
        >
          Virer 20 €
        </button>
        <button
          className="top-load-money"
          onClick={() => {
            let random = randomItem();
            handleDeposit({
              random,
              amount: -30,
              transactionDate: new Date(),
            });
          }}
        >
          Virer 30 €
        </button>
        <button
          className="top-load-money"
          onClick={() => {
            let random = randomItem();
            handleDeposit({
              random,
              amount: -40,
              transactionDate: new Date(),
            });
          }}
        >
          Virer 40 €
        </button>
      </div>
      <Link to="/ChoiceTransfer">
        <input type="submit" value="Annuler" />
      </Link>
    </div>
  );
}

export default Transfer;

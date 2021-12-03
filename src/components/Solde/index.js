import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import Datetime from "./Datetime";
import "./Home.css";
import "../../pages/Plus/plus.css";
import dayjs from "dayjs";
function Solde() {
  const { transactions } = useContext(Context); // j'utilise mon context défini dans utile/context.js
  console.log(transactions);
  console.log(
    transactions.reduce((a, b) => {
      // j'utilise reduce pour afficher mon solde et l'actualiser : a est la valeur par défaut, b la nouvelle
      console.log(a, b); // valeur à ajouter au solde a. amount est la valeur de la transition.
      return a + b.amount;
    }, 0)
  );
  return (
    <div className="home">
      <div className="top">
        <h1>{transactions.reduce((a, b) => a + b.amount, 0) + " €"}</h1>{" "}
        {/*affichage du solde*/}
        <Datetime />
        <div className="buttons-top">
          <Link to="/ChoicePay">
            <input
              type="submit"
              className="button-blue"
              value="Recharger mon compte"
            />
          </Link>
          <Link to="/ChoiceTransfer">
            <input
              type="submit"
              className="button-blue"
              value="Virer mon argent"
            />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="top-section">
          <h3>
            Mes transactions
            <Link to="/AllTransactions">
              <input type="submit" value="Voir tout" />
            </Link>
          </h3>
        </div>
        <div className="historique">
          {/*sort pour ranger mon tableau par ordre décroissant en soustrayant la date de la valeur b (plus récente) à la date de la valeur a (plus ancienne)*/}
          {/*slice pour n'afficher que les valeurs 0 à 5*/}
          {/*map pour parcourir l'ensemble des valeurs, ajouter un resto random, un montant de transaction et une date de transaction*/}
          {transactions
            .sort(
              (a, b) =>
                new Date(b.transactionDate) - new Date(a.transactionDate)
            )
            .slice(0, 5)
            .map((elt, key) => (
              <p key={key} className="date">
                {elt.random +
                  elt.amount +
                  "€ " +
                  dayjs(elt.transactionDate).locale("fr").format("DD MMM")}
              </p>
            ))}
        </div>
      </div>

      <div className="bottom-container">
        <div className="pay-button">
          <img alt="" src="../../../public/assets/menu.svg" />
        </div>
      </div>
    </div>
  );
}

export default Solde;

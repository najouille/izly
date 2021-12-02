import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import dayjs from "dayjs";
// import Datetime from "./Datetime";

function AllTransactions() {
  const { transactions } = useContext(Context);
  return (
    <div className="top-section">
      <Link to="/">
        <input type="submit" value="Retour" />
      </Link>
      <h2>Mes transactions</h2>
      {transactions
        .sort(
          (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
        )
        .map((elt) => (
          <p>
            {elt.random +
              elt.amount +
              "€ " +
              dayjs(elt.transactionDate).locale("fr").format("DD MMM")}
          </p>
        ))}
    </div>
  );
}

export default AllTransactions;

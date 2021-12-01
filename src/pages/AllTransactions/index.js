import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
// import Datetime from "./Datetime";

function AllTransactions() {
    const { transactions } = useContext(Context)
    return (
        <div className="top-section">
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
            <h2>Mes transactions</h2>
            {transactions.map( (elt, index) => index < 50 ? elt.amount+'€ ' + elt.transactionDate : '')}
        </div>
    );
}

export default AllTransactions;
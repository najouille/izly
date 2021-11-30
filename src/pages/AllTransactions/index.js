import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
// import Datetime from "./Datetime";

function AllTransactions() {
    const { transactions } = useContext(Context)
    return (
        <div className="top-section">
            <h3>Mes transactions</h3>
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
            {JSON.stringify(transactions, null, 4)}
        </div>
    );
}

export default AllTransactions;
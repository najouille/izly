import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import Datetime from "./Datetime";

function Solde() {
    const { count, transactions } = useContext(Context)
    return (
        <div className="top-container">
            <div className="sold-container">
                <h1>{count}</h1>
                <Datetime />
                <div className="buttons-top">
                    <Link to="/pay">
                        <input type="submit" value="Recharger mon compte" />
                    </ Link>
                    <Link to="/transfer">
                        <input type="submit" value="Virer mon argent" />
                    </ Link>
                </div>
                {JSON.stringify(transactions, null, 4)}
            </div>
        </div>
    );
}

export default Solde;
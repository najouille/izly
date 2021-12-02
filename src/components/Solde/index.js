import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import Datetime from "./Datetime";

function Solde() {
    const { transactions } = useContext(Context)
    console.log(transactions)
    console.log(transactions.reduce((a,b) => {
        console.log(a, b)
        return a + b.amount
    }, 0))
    return (
        <div className="top-container">
            <div className="sold-container">
                <h1>{transactions.reduce((a,b) => a + b.amount, 0)}</h1>
                <Datetime />
                <div className="buttons-top">
                    <Link to="/ChoicePay">
                        <input type="submit" value="Recharger mon compte" />
                    </ Link>
                    <Link to="/ChoiceTransfer">
                        <input type="submit" value="Virer mon argent" />
                    </ Link>
                </div>
                <div className="transactions-bottom">
                    <div className="top-section">
                        <p>Mes transactions</p>
                        <Link to="/AllTransactions">
                            <input type="submit" value="Voir tout" />
                        </ Link>
                    </div>
                    {transactions.map( (elt, index) => index < 5 ? elt.amount+ '€ ' + elt.transactionDate : '')}

                    {/* {(() => {
                            let megagrossechainedecaracteres = ''
                            for(let i=0; i<10; i++) {
                                megagrossechainedecaracteres = megagrossechainedecaracteres + transactions[i] + ' '
                            }
                            return megagrossechainedecaracteres
                        })()
                    } */}
                    {/* {JSON.stringify(transactions, null, 4)} */}
                </div>
                
            </div>

            <div className="bottom-container">
            <div className="pay-button">
                <img alt="" src="../../../public/assets/menu.svg" />
                <Link to="/QrCode">
                    <input type="submit" value="Payer" />
                </ Link>
            </div>
            </div>
        </div>
    );
}

export default Solde;
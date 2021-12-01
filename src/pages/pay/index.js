import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

function Pay() {
    const { transactions, setTransactions } = useContext(Context)

    function handleDeposit(transaction) {
        setTransactions([...transactions, transaction])
    }   
    return (
        <div className="top-container">
            <div className="sold-container">
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({amount: 10, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 10 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({amount: 20, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 20 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({amount: 30, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 30 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({amount: 40, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 40 €</button>
                </ Link>
                
                
            </div>
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
        </div>
    );
}

export default Pay;
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

    function randomItem() {
        
    var randomPlace = [
        "Le Capu'",
        "La Bastide",
        "Haut-Carré",
        "Le Mascaret",
        "Le Veracruz"
      ];

      let randomName = Math.floor(Math.random()*randomPlace.length);
        return randomPlace[randomName]; 
    }

    return (
        <div className="top-container">
            <Link to="/ChoicePay">
                <input type="submit" value="Retour" />
            </ Link>
            <h2>Recharger</h2>
            <div className="sold-container">
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({randomItem , amount: 10, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 10 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({randomItem, amount: 20, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 20 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({randomItem, amount: 30, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 30 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit({randomItem, amount: 40, transactionDate: dayjs().locale('fr').format('DD MMM')})}>Recharger 40 €</button>
                </ Link>
            </div>
        </div>
    );
}

export default Pay;
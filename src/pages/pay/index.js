import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";

function Pay() {
    const { count, setCount, transactions, setTransactions } = useContext(Context)

    function handleDeposit(amount) {
        setCount(count + amount)
        setTransactions([...transactions, amount])
        
    }
    return (
        <div className="top-container">
            <div className="sold-container">
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit(10)}>Recharger 10 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit(20)}>Recharger 20 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit(30)}>Recharger 30 €</button>
                </ Link>
                <Link to="/validation">
                    <button className="top-load-money" onClick={() => handleDeposit(40)}>Recharger 40 €</button>
                </ Link>
                
                
            </div>
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
        </div>
    );
}

export default Pay;
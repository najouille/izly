import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../utile/context";

function Transfer() {
    const { count, setCount, transactions, setTransactions } = useContext(Context)

    function handleDeposit(amount) {
        setCount(count + amount)
        setTransactions([...transactions, amount])
        
    }
    return (
        <div className="top-container">
            <div className="sold-container">    
                <button className="top-load-money" onClick={() => handleDeposit(-10)}>Virer 10 €</button>
                <button className="top-load-money" onClick={() => handleDeposit(-20)}>Virer 20 €</button>
                <button className="top-load-money" onClick={() => handleDeposit(-30)}>Virer 30 €</button>
                <button className="top-load-money" onClick={() => handleDeposit(-40)}>Virer 40 €</button>
            </div>
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
        </div>
    );
}

export default Transfer;
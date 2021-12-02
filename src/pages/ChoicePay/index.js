import React from 'react'
import { Link } from 'react-router-dom'

function ChoicePay() {
    return (
        <div className="top-container">
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
            <div className="sold-container">
            <h2>Recharger</h2>
            </div>
            <Link to="/Pay">
                <input type="submit" value="Par carte bancaire" />
            </ Link>
            <Link to="/Pay">
                <input type="submit" value="Par compte bancaire" />
            </ Link>
        </div>
    )
}

export default ChoicePay;
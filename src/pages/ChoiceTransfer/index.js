import React from 'react'
import { Link } from 'react-router-dom'

function ChoiceTransfer() {
    return (
        <div className="top-container">
            <div className="sold-container">
            <h2>Virement</h2>
            </div>
            <Link to="/Transfer">
                <input type="submit" value="Vers ma banque" />
            </ Link>
            <Link to="/TransferTiers">
                <input type="submit" value="Vers un tiers" />
            </ Link>
        </div>
    )
}

export default ChoiceTransfer;
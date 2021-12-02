import React from 'react'
import { Link } from 'react-router-dom'

function TransferTiers() {
    return (
        <div className="top-container">
            <div className="sold-container">
            <h2>Vers un tiers</h2>
            </div>
            <div>
                <label>E-mail du destinataire</label>
                    <input type="email" placeholder="izly@exemple.com" />
                    <Link to="/Transfer">
                        <input type="submit" value="Valider" />
                    </ Link>
                <Link to="/ChoiceTransfer">
                    <input type="submit" value="Annuler" />
                </ Link>
            </div>
            
        </div>
    )
}

export default TransferTiers;
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TransferTiers() {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/Transfer")
    }

    return (
        <div className="top-container">
            <div className="sold-container">
            <h2>Vers un tiers</h2>
            </div>
            <div>
                <label>E-mail du destinataire</label>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="izly@exemple.com" />
                    <input type="submit" value="Valider" />
                </form>
                    
                <Link to="/ChoiceTransfer">
                    <input value="Annuler" />
                </ Link>
            </div>
            
        </div>
    )
}

export default TransferTiers;
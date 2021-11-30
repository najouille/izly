import React from 'react'
import { Link } from 'react-router-dom'

function Validation() {
    return (
        <div className="top-container">
            <div className="sold-container">
            <h1>Votre opération à été validé !</h1>
            </div>
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
        </div>
    )
}

export default Validation
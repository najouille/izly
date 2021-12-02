import React from 'react'
import { Link, useParams  } from 'react-router-dom'

function Validation() {

    let { etatTransac } = useParams();

    return (
        <div className="top-container">
            <div className="sold-container">
            <h1>Votre opération à été validé {etatTransac}!</h1>
            </div>
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
        </div>
    )
}

export default Validation
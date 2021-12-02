import React from "react";
import { Link } from "react-router-dom";
import 'dayjs/locale/fr';

function QrCode() {
    return (
        <div className="top-container">
            <Link to="/">
                <input type="submit" value="Retour" />
            </ Link>
            <div className="sold-container">
                <h2>Payer</h2>
                <p>Présentez le QR code au lecteur du point d'encaissement</p>
                <div className="qr-container">
                    <img alt="" src="./assets/qrcode.jpg" />
                </div>
            </div>
        </div>
    );
}

export default QrCode;
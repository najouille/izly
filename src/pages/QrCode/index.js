import React, { useEffect, useContext, useCallback } from "react";
// import { Link } from "react-router-dom";
import Context from "../../utile/context";
import "dayjs/locale/fr";
import "./QrCode.css";
import { useNavigate } from "react-router";

function QrCode() {
  const { transactions, setTransactions } = useContext(Context);
  const navigate = useNavigate();

  function randomItem() {
    var randomPlace = [
      "Le Capu'",
      "La Bastide",
      "Haut-Carré",
      "Le Mascaret",
      "Le Veracruz",
    ];

    let randomName = Math.floor(Math.random() * randomPlace.length);
    return randomPlace[randomName];
  }

  const handleDeposit = useCallback(
    (transaction) => {
      setTransactions([...transactions, transaction]);
    },
    [setTransactions, transactions]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      let random = randomItem();
      handleDeposit({
        random,
        amount: -1,
        transactionDate: new Date(),
      });
      navigate("/validation");
    }, 3000);
    return () => clearTimeout(timer);
  }, [handleDeposit, navigate]);
  return (
    <div className="qrcode">
      <div className="top-qr">
        <h2 className="player-title">Payer</h2>
        <p>Présentez le QR code au lecteur du point d'encaissement</p>
      </div>

      <div className="bottom">
        <div className="qr_container">
          <img alt="" src="./assets/qrcode.png" />
        </div>
      </div>
    </div>
  );
}

export default QrCode;

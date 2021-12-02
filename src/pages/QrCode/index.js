import React, { useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import Context from "../../utile/context";
import "dayjs/locale/fr";
import dayjs from "dayjs";
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

  function handleDeposit(transaction) {
    setTransactions([...transactions, transaction]);
  }
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
  }, []);
  return (
    <div className="top-container">
      {/* <Link to="/">
        <input type="submit" value="Retour" />
      </Link> */}
      <div className="sold-container">
        <h2>Payer</h2>
        <p>Présentez le QR code au lecteur du point d'encaissement</p>
        <div className="qr-container">
          <img alt="" src="./assets/qrcode.png" />
        </div>
      </div>
    </div>
  );
}

export default QrCode;

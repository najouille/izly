import dayjs from "dayjs";
import React from "react";
import "dayjs/locale/fr";

const Datetime = () => {
  // permet d'obtenir le jour, la date, l'heure et les minutes en français et de l'afficher.
  return (
    <div>
      <p>Solde au {dayjs().locale("fr").format("dddd D MMMM YYYY | HH:mm")}</p>
    </div>
  );
};

export default Datetime;

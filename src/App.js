import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Parameters from "./pages/Parameters";
import Pay from "./pages/Pay";
import Transfer from "./pages/Transfer";
import AllTransactions from "./pages/AllTransactions";
import Plus from "./pages/Plus";
import Validation from "./pages/Validation";
import Profil from "./pages/Profil";
import Context from "./utile/context";
import useLocalState from "./utile/useLocaleState";
import ChoicePay from "./pages/ChoicePay";
import ChoiceTransfer from "./pages/ChoiceTransfer";
import TransferTiers from "./pages/TransferTiers";
import MyCards from "./pages/Parameters/MyCards";
import AddCard from "./pages/Parameters/AddCard";
import QrCode from "./pages/QrCode";
import Navbar from "./components/Navbar";

function App() {
  const [transactions, setTransactions] = useLocalState([], "transactions");

  const context = {
    //contexte qui gère les transaction sur l'app
    transactions, //ensemble de transactions
    setTransactions, //ajoute une transaction
    addMoney: (amount) => {
      // solde défini à 0 et recalculé à chaque transaction
      let solde = transactions.reduce((a, b) => a + b.amount, 0);
    },
  };

  return (
    <Context.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/alltransactions" element={<AllTransactions />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/validation:etatTransac" element={<Validation />} />
          <Route path="/choicepay" element={<ChoicePay />} />
          <Route path="/choicetransfer" element={<ChoiceTransfer />} />
          <Route path="/transfertiers" element={<TransferTiers />} />
          <Route path="/qrcode" element={<QrCode />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

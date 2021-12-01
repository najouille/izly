import React from 'react';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
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
import ChoiceCard from "./components/ChoiceCard";
import ChoicePay from "./pages/ChoicePay";
import ChoiceTransfer from "./pages/ChoiceTransfer";
import TransferTiers from "./pages/TransferTiers";


function App() {

  const [count, setCount] = useLocalState(0)
  const [transactions, setTransactions] = useLocalState([])

  const context = {
    count,
    setCount,
    transactions,
    setTransactions 
  }


  return (
    <Context.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/alltransactions" element={<AllTransactions />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/choicecard" element={<ChoiceCard />} />
          <Route path="/choicepay" element={<ChoicePay />} />
          <Route path="/choicetransfer" element={<ChoiceTransfer />} />
          <Route path="/transfertiers" element={<TransferTiers />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
};

export default App;

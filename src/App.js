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
import MyCards from "./pages/Parameters/MyCards";
import AddCard from "./pages/Parameters/AddCard";


function App() {

  const [count, setCount] = useLocalState(0, "count")
  const [transactions, setTransactions] = useLocalState([], "transactions")

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
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/allTransactions" element={<AllTransactions />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
};

export default App;

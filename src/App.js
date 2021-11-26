import React from "react";
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Parameters from "./pages/Parameters";
import Pay from "./pages/Pay";
import Plus from "./pages/Plus";
import Profil from "./pages/Profil";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/parameters" element={<Parameters/>} />
          <Route path="/pay" element={<Pay/>} />
          <Route path="/plus" element={<Plus/>} />
          <Route path="/profil" element={<Profil/>} />
        </Routes>
      </BrowserRouter>
    )};

export default App;

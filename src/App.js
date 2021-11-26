import React from "react";
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Parameters from "./pages/parameters";
import Pay from "./pages/pay";
import Plus from "./pages/plus";
import Profil from "./pages/profil";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/parameters" element={<Parameters/>} />
          <Route path="/pay" element={<Pay/>} />
          <Route path="/plus" element={<Plus/>} />
          <Route path="/profil" element={<Profil/>} />
        </Routes>
      </BrowserRouter>
    )};

export default App;

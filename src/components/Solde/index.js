import React, { useState } from "react";
import Datetime from "./Datetime";

function Solde() {
    const [count, setCount] = useState(0)
    return (
        <div class="top-container">
            <div class="sold-container">
                <h1>{count}</h1>
                <Datetime />
                <button class="top-load-money" onClick={() => setCount(count + 10)}>Recharger mon compte</button>
                <button class="top-unload-money" onClick={() => setCount(count - 10)}>Virer mon argent</button>
            </div>
        </div>
    );
}

export default Solde;
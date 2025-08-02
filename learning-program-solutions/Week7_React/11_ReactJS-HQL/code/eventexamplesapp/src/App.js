import React from "react";
import Counter from "./Counter";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSyntheticEvent = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Events Example</h1>

      <Counter />

      <button onClick={() => sayWelcome("Welcome to React!")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>Click Me (Synthetic Event)</button>

      <br /><br />

      <CurrencyConverter />
    </div>
  );
}

export default App;

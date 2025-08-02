import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = (parseFloat(rupees) / 90).toFixed(2); // assume 1 Euro = ₹90
    setEuros(result);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euros && (
        <p>
          <strong>€{euros}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;

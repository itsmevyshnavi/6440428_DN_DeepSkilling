import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flightDetails = [
    { id: 1, name: "Air India", time: "10:00 AM", destination: "Delhi" },
    { id: 2, name: "IndiGo", time: "12:30 PM", destination: "Mumbai" },
    { id: 3, name: "SpiceJet", time: "3:45 PM", destination: "Chennai" }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const headingStyle = {
    textAlign: "center",
    color: "#2c3e50",
    marginTop: "20px"
  };

  return (
    <div>
      <h1 style={headingStyle}>Flight Ticket Booking</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      {isLoggedIn ? (
        <div style={{ textAlign: "center" }}>
          <h2>Welcome, User!</h2>
          <h3>Available Flights for Booking:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {flightDetails.map((flight) => (
              <li key={flight.id} style={{ margin: "10px" }}>
                ✈ {flight.name} - {flight.destination} - {flight.time}{" "}
                <button style={{ marginLeft: "10px" }}>Book Now</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Welcome, Guest!</h2>
          <p>Please login to book your flight tickets.</p>
          <h3>Flight Schedules:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {flightDetails.map((flight) => (
              <li key={flight.id} style={{ margin: "10px" }}>
                ✈ {flight.name} - {flight.destination} - {flight.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

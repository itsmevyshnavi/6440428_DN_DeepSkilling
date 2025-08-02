import React from "react";

function App() {
  const offices = [
    {
      id: 1,
      name: "Sky High Towers",
      rent: 45000,
      address: "Madhapur, Hyderabad",
      image: "1.jpeg"
    },
    {
      id: 2,
      name: "Tech Space Plaza",
      rent: 75000,
      address: "Gachibowli, Hyderabad",
      image: "2.jpeg"
    },
    {
      id: 3,
      name: "Business Bay",
      rent: 60000,
      address: "Banjara Hills, Hyderabad",
      image: "3.jpeg"
    }
  ];

  const headingStyle = {
    color: "#2c3e50",
    textAlign: "center",
    marginTop: "20px"
  };

  return (
    <div>
      <h1 style={headingStyle}>Office Space Rental Listings</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {offices.map((office) => (
          <div
            key={office.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
              width: "300px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }}
            />
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p
              style={{
                color: office.rent > 60000 ? "green" : "red",
                fontWeight: "bold"
              }}
            >
              Rent: ₹{office.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

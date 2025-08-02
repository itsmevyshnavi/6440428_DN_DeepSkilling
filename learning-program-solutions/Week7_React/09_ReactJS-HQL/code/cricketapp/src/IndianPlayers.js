import React from 'react';

const IndianPlayers = () => {
  const team = ["Kohli", "Rohit", "Rahul", "Dhoni", "Shubman", "Hardik"];
  const [p1, p2, p3, p4, p5, p6] = team;

  const T20players = ["Rishabh", "Surya", "Axar"];
  const RanjiTrophy = ["Pujara", "Karun", "Saha"];
  const allPlayers = [...T20players, ...RanjiTrophy]; 

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>{p1}, {p3}, {p5}</p>

      <h2>Even Team Players</h2>
      <p>{p2}, {p4}, {p6}</p>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

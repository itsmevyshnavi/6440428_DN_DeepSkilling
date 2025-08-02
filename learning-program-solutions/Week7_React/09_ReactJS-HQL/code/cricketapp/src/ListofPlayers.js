import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 65 },
    { name: "Dhoni", score: 90 },
    { name: "KL Rahul", score: 55 },
    { name: "Shubman", score: 76 },
    { name: "Hardik", score: 30 },
    { name: "Jadeja", score: 88 },
    { name: "Bumrah", score: 20 },
    { name: "Shami", score: 50 },
    { name: "Siraj", score: 73 },
    { name: "Rinku", score: 45 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name}: {player.score}</p>
      ))}
      <h2>Filtered Players (Score >= 70)</h2>
      {filteredPlayers.map((player, index) => (
        <p key={index}>{player.name}: {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;

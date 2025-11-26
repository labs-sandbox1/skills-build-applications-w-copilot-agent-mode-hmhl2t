import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Leaderboard data:', data.results || data);
        setLeaders(data.results || data);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, [endpoint]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map(entry => (
          <li key={entry.id}>{entry.user}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`; // Updated endpoint

  useEffect(() => {
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = data.results || data;
        console.log('Teams data:', results);
        setTeams(results);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, [endpoint]);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team, idx) => (
          <li key={team.id || idx}>{team.name || JSON.stringify(team)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;

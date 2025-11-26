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
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="card-title h4 mb-0">Teams</h2>
      </div>
      <div className="card-body">
        {teams.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {teams.map((team, idx) => (
                  <tr key={team.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{team.name || JSON.stringify(team)}</td>
                    {/* Add more cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-muted">No teams found.</div>
        )}
      </div>
    </div>
  );
};

export default Teams;

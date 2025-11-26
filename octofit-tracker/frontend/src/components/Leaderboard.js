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
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="card-title h4 mb-0">Leaderboard</h2>
      </div>
      <div className="card-body">
        {leaders.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((entry, idx) => (
                  <tr key={entry.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{entry.user}</td>
                    <td>{entry.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-muted">No leaderboard data found.</div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;

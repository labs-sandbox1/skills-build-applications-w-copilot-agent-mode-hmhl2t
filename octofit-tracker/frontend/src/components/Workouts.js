import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`; // Updated endpoint

  useEffect(() => {
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = data.results || data;
        console.log('Workouts data:', results);
        setWorkouts(results);
      })
      .catch(error => console.error('Error fetching workouts:', error));
  }, [endpoint]);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="card-title h4 mb-0">Workouts</h2>
      </div>
      <div className="card-body">
        {workouts.length > 0 ? (
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
                {workouts.map((workout, idx) => (
                  <tr key={workout.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{workout.name}</td>
                    {/* Add more cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-muted">No workouts found.</div>
        )}
      </div>
    </div>
  );
};

export default Workouts;

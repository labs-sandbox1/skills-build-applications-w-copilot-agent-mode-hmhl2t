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
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout, idx) => (
            <li key={workout.id || idx}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;

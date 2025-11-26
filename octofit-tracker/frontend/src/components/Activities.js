import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `/api/activities/`;

  useEffect(() => {
    console.log('Fetching Activities from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = data.results || data;
        console.log('Activities data:', results);
        setActivities(results);
      })
      .catch(error => console.error('Error fetching activities:', error));
  }, [endpoint]);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, idx) => (
          <li key={activity.id || idx}>{activity.name || JSON.stringify(activity)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;

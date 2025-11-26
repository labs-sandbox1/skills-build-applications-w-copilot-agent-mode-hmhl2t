import React, { useEffect, useState } from 'react';
// Bootstrap styles assumed loaded globally (see App.js)

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
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="card-title h4 mb-0">Activities</h2>
      </div>
      <div className="card-body">
        {activities.length > 0 ? (
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
                {activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{activity.name || JSON.stringify(activity)}</td>
                    {/* Add more cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-muted">No activities found.</div>
        )}
      </div>
    </div>
  );
};

export default Activities;

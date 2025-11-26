import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = data.results || data;
        console.log('Users data:', results);
        setUsers(results);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, [endpoint]);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-secondary text-white">
        <h2 className="card-title h4 mb-0">Users</h2>
      </div>
      <div className="card-body">
        {users.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{user.username}</td>
                    {/* Add more cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-muted">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default Users;

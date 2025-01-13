import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: 0, color: 'white' }}>User List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <Link to={`/users/${user.id}`} style={{ marginRight: '10px' }}>
                  View
                </Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

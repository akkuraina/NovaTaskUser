import React, { useState } from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'akshay kumar', email: 'akshay@gmail.com', status: 'active' },
    { id: 2, name: 'salman khan', email: 'salman@gmail.com', status: 'inactive' },
  ]);

  // Delete user function
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    alert('User deleted successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Manage Users</h1>
      
      {/* Pass users state and deleteUser function to UserList */}
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default Users;

import React, { useContext } from 'react';
import UserList from '../components/UserList';
import { UserContext } from '../context/UserContext'; // Import UserContext

const Users = () => {
  const { users, deleteUser } = useContext(UserContext); // Access context values

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Manage Users</h1>
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default Users;

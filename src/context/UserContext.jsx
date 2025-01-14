import React, { createContext, useState } from 'react';

// Create a Context
export const UserContext = createContext();

// Create a Provider Component
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'akshay kumar', email: 'akshay@gmail.com', status: 'active' },
    { id: 2, name: 'salman khan', email: 'salman@gmail.com', status: 'inactive' },
  ]);

  // Add a user
  const addUser = (newUser) => {
    if (users.some((user) => user.email === newUser.email)) {
      alert('Email already exists!');
      return;
    }
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: users.length ? users[users.length - 1].id + 1 : 1 },
    ]);
    alert('User added successfully!');
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    alert('User deleted successfully!');
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

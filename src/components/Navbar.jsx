import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: 'gold' }}>
      <Link to="/" style={{ marginRight: '15px' , color: 'black' }}>Home</Link>
      <Link to="/users" style={{ marginRight: '15px', color: 'black' }}>Users</Link>
      <Link to="/add-user" style={{color: 'black'}}>Add User</Link>
    </nav>
  );
};

export default Navbar;

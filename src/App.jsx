import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import AddUser from './pages/Adduser';
import UserDetails from './pages/UserDetails';
import './app.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
};

export default App;

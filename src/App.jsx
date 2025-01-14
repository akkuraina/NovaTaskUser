import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import AddUserPage from './pages/Adduser';
import UserProvider from './context/UserContext'; // Import UserProvider

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

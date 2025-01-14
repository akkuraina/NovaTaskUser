import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Import UserContext

const AddUserPage = () => {
  const { addUser } = useContext(UserContext); // Access addUser from context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'active',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.email) {
      addUser(formData);
      setFormData({
        name: '',
        email: '',
        status: 'active',
      });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </label>
        <br />
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;

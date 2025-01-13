import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    if (formData.name && formData.email) {
      addUser(formData);
      setFormData({ name: '', email: '', status: 'active' });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
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
  );
};

export default UserForm;

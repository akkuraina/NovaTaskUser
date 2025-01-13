import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
      {/* Fetch and display user details based on the ID */}
    </div>
  );
};

export default UserDetails;

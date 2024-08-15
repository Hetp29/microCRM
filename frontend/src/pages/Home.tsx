import React from 'react';
import Table from '../components/Table';
import Login from '../components/Login';

const mockRecords = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipcode: '12345',
    created_at: '2024-08-15',
  },
  // Add more mock records as needed
];

const Home = () => {
  const userAuthenticated = true; // Mock authentication

  return (
    <div>
      {userAuthenticated ? <Table records={mockRecords} /> : <Login />}
    </div>
  );
};

export default Home;

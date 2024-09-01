import React from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
        const response = await axios.post(`${API_BASE_URL}/login/`, {
            email: formData.get('email') as string,  // Fixed typo from 'enail' to 'email'
            password: formData.get('password') as string,
        });
        console.log('User logged in:', response.data);
    } catch (error) {
        console.error('Error during login:', error);
    }
};

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleLogin}>  {/* Attach handleLogin to onSubmit */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"  
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

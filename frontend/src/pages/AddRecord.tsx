import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecord = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Record</h1>
      <form method="POST" onSubmit={handleSubmit}>
        {/* Replace with actual form fields */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Record Field"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Add Record
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full mt-4 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default AddRecord;

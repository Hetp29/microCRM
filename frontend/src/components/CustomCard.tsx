import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomerRecordProps {
  customer_record: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    created_at: string;
  };
}

const CustomerRecord: React.FC<CustomerRecordProps> = ({ customer_record }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="bg-gray-800 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">
          {customer_record.first_name} {customer_record.last_name}
        </h2>
      </div>
      <div className="p-4">
        <p className="mb-2"><strong>Email:</strong> {customer_record.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {customer_record.phone}</p>
        <p className="mb-2"><strong>Address:</strong> {customer_record.address}</p>
        <p className="mb-2"><strong>City:</strong> {customer_record.city}</p>
        <p className="mb-2"><strong>State:</strong> {customer_record.state}</p>
        <p className="mb-2"><strong>Zipcode:</strong> {customer_record.zipcode}</p>
        <p className="mb-2"><strong>Created At:</strong> {customer_record.created_at}</p>
        <p className="mb-2"><strong>ID:</strong> {customer_record.id}</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => navigate('/')}
          className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          Back
        </button>
        <button
          onClick={() => navigate(`/delete-record/${customer_record.id}`)}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/update-record/${customer_record.id}`)}
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Update Record
        </button>
      </div>
    </div>
  );
};

export default CustomerRecord;

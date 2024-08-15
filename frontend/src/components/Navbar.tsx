import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold" to="/">Django CRM</Link>
        <div className="flex space-x-4">
          <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

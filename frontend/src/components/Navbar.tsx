import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold" to="/">Django CRM</Link>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link className="text-gray-300 hover:text-white" to="/add-record">Add Record</Link>
              <Link className="text-gray-300 hover:text-white" to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link className="text-gray-300 hover:text-white" to="/register">Register</Link>
              <Link className="text-gray-300 hover:text-white" to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

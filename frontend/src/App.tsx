import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddRecord from './pages/AddRecord';
import CustomerRecord from './components/CustomCard';

const App = () => {
  return (
    <Router>
      <Navbar isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/add-record" element={<AddRecord />} />
        
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './components/Register';
import { Box } from '@chakra-ui/react';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <Router>
      <Routes>
        <Box bg="gray.50">
          <HeroSection />
        </Box>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

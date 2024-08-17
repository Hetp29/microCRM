import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Box } from '@chakra-ui/react';
import { HeroSection } from './components/HeroSection';
import { Layout } from './components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <Router>
      <Layout>
        <Box bg="gray.50">
          <AppRoutes />
        </Box>
      </Layout>
    </Router>
  );
};


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { HeroSection } from './components/HeroSection';
import { Layout } from './components/Layout';
import ImageSection from './components/ImageSection';
import { FeaturesSection } from './components/Feature';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box>
            <HeroSection />
            <Box mt={-24}>
              <ImageSection />
            </Box>
            <FeaturesSection />
            <PricingSection />
            <FAQSection />
          </Box>
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <Router>
      <Layout>
        <Global
          styles={{
            'html, body, #root': {
              backgroundColor: 'white',
              color: 'gray.800',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              minHeight: '100vh', // Ensures the background covers the full height
            },
            '*': {
              boxSizing: 'inherit',
            },
          }}
        />
        <Box bg="white" minHeight="100vh">
          <AppRoutes />
        </Box>
      </Layout>
    </Router>
  );
};
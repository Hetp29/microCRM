import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Box } from '@chakra-ui/react';
import { HeroSection } from './components/HeroSection';
import { Layout } from './components/Layout';
import ImageSection from './components/ImageSection';
import { FeaturesSection } from './components/Feature';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box mb={2}>
            <HeroSection /> {/* Reduce margin-bottom */}
            <Box mt={-114}> {/* Adjust margin-top to bring ImageSection up */}
              <ImageSection />
            </Box>
            <FeaturesSection /> {/* Add FeaturesSection to the landing page */}
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
        <Box bg="gray.50">
          <AppRoutes />
        </Box>
      </Layout>
    </Router>
  );
};

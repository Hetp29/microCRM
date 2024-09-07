import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import { HeroSection } from './components/HeroSection';
import ImageSection from './components/ImageSection';
import { FeaturesSection } from './components/Feature';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './dashboard/Dashboard';
import ForgotPassword from './pages/ForgotPassword';


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box bgColor="white">
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
      <Route path="/login" element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <Router>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar name={''} />
        <Box
          flex="1"
          bg="white" 
          p={0} // Ensure no padding
          m={0} // Ensure no margin
          
        >
          <AppRoutes />
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};
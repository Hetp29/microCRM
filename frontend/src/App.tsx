import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './components/Register';
import { Box } from '@chakra-ui/react';
import { HeroSection } from './components/HeroSection';
import { Layout } from './components/Layout';


export const App = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
      </Box>
    </Layout>
  );
};
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Box bg="gray.50">
//           <HeroSection />
//         </Box>
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// }

//export default App;

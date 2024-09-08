import React from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';


const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Sidebar userTier="Professional" /> 

      {/* Main Dashboard Content */}
      <Box p={8} textAlign="center" flex="1" bg="gray.50">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to ClientSync
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Your dashboard is ready to manage your projects and clients efficiently.
        </Text>
        <Button colorScheme="red" onClick={handleLogout} mt={6}>
          Log Out
        </Button>
      </Box>
    </Flex>
  );
};

export default Dashboard;
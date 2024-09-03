import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }
  console.log('Dashboard component is rendering');
  return (
    <Box p={8} textAlign="center" bg="yellow">
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to ClientSync
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Your dashboard is ready to manage your projects and clients efficiently.
      </Text>
      <Button colorScheme='red' onClick={handleLogout}>
        Log Out
      </Button>
    </Box>
  );
};

export default Dashboard;

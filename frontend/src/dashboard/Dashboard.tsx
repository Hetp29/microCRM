import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => {
  console.log('Dashboard component is rendering');
  return (
    <Box p={8} textAlign="center" bg="yellow">
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to ClientSync
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Your dashboard is ready to manage your projects and clients efficiently.
      </Text>
    </Box>
  );
};

export default Dashboard;

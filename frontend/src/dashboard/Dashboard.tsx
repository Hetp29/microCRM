import React, { useState } from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Sidebar } from './Sidebar'; // Keep the Sidebar component
import ContactsList from './contacts/ContactsList'; // Import the ContactsList component
import { Contact } from './contacts/types';
import ContactsPage from './contacts/ContactsPage';

const Dashboard: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Flex h="100vh">
      
      <Sidebar userTier="Professional" /> 

      
      <Box p={8} textAlign="center" flex="1" bg="gray.50">
        <Routes>
          <Route path="/" element={
            <>
              <Heading as="h1" size="2xl" textColor="black" mb={4}>
                Welcome to ClientSync
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Your dashboard is ready to manage your projects and clients efficiently.
              </Text>
              <Button colorScheme="red" onClick={handleLogout} mt={6}>
                Log Out
              </Button>
            </>
          }/>
          <Route path="/contacts/" element={<ContactsPage/>} /> {/* Contact Management */}
        </Routes>
      </Box>
    </Flex>
  );
};

export default Dashboard;

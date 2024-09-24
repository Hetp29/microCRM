import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import { Sidebar } from '../Sidebar'; // Import Sidebar
import { Contact } from './types';

const ContactsPage: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <Flex h="100vh">
      
      <Sidebar userTier="Professional" /> 

      <Box w="30%" p={4} >
        <ContactsList setSelectedContact={setSelectedContact} />
      </Box>

      <Box flex="1" p={8} bg="white">
        <Box w="100%"  >
          <ContactForm editingContact={selectedContact} setEditingContact={setSelectedContact} setContacts={setContacts} />
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactsPage;

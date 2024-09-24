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
      {/* Left side: Sidebar */}
      <Box w="20%" bg="gray.50" borderRight="1px solid gray">
        <Sidebar userTier="Professional" />
      </Box>

      {/* Center: Contacts List */}
      <Box w="30%" p={4} bg="gray.100" borderRight="1px solid gray">
        <ContactsList setSelectedContact={setSelectedContact} />
      </Box>

      {/* Right side: Contact Form */}
      <Box flex="1" p={8} bg="white">
        <Box w="100%" maxW="600px" bg="yellow.100" border="1px solid gray" borderRadius="md" p={8}>
          <ContactForm editingContact={selectedContact} setEditingContact={setSelectedContact} setContacts={setContacts} />
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactsPage;

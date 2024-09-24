import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import { Contact } from './types';

const ContactsPage: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <Flex h="100vh" p={4} bg="blue.50">
      {/* Left side: Contacts List */}
      <Box w="30%" p={4} bg="gray.100" borderRight="1px solid gray">
        <ContactsList setSelectedContact={setSelectedContact} />
      </Box>

      {/* Right side: Contact Form */}
      <Box flex="1" display="flex" justifyContent="flex-end" alignItems="flex-start" p={8} bg="white">
        <Box w="100%" maxW="600px" bg="yellow.100" border="1px solid gray" borderRadius="md" p={8}>
          <ContactForm editingContact={selectedContact} setEditingContact={setSelectedContact} setContacts={setContacts} />
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactsPage;

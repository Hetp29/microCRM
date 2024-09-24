import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import { Contact } from './types';

const ContactsPage: React.FC = () => {
    //Manage the state for the selected contact
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null); //manage contacts state
    const [contacts, setContacts] = useState<Contact[]>([]);
  
    return (
      <Flex h="100vh">
        {/* Left side: Contacts List */}
        <Box w="30%" p={4} bg="gray.100" borderRight="1px solid gray">
          <ContactsList setSelectedContact={setSelectedContact} />
        </Box>
  
        {/* Right side: Contact Form */}
        <Box w="70%" p={8} bg="white">
          <ContactForm editingContact={selectedContact} setEditingContact={setSelectedContact} setContacts={setContacts}/>
        </Box>
      </Flex>
    );
  };
  
  export default ContactsPage;
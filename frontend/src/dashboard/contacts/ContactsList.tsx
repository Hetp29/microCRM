import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import { Contact } from './types'; // Import the shared Contact type

const ContactsList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  useEffect(() => {
    axios.get('/contacts/')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const deleteContact = (id: number) => {
    axios.delete(`/contacts/${id}/`)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch(error => console.error('Error deleting contact:', error));
  };

  return (
    <div className="contacts-list">
      <h2>Contact Management</h2>
      <ContactForm 
        setContacts={setContacts} 
        editingContact={editingContact} 
        setEditingContact={setEditingContact} 
      />
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.email}</span>
            <button onClick={() => setEditingContact(contact)}>Edit</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
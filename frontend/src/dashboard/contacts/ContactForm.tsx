import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Contact } from './types'; // Import the shared Contact type

interface ContactFormProps {
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  editingContact: Contact | null;
  setEditingContact: React.Dispatch<React.SetStateAction<Contact | null>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ setContacts, editingContact, setEditingContact }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [company, setCompany] = useState<string>('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhoneNumber(editingContact.phone_number);
      setCompany(editingContact.company);
    }
  }, [editingContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contactData: Contact = { 
      id: editingContact ? editingContact.id : 0,  // Assign a default value for new contacts
      name, 
      email, 
      phone_number: phoneNumber, 
      company 
    };

    if (editingContact) {
      axios.put(`/contacts/${editingContact.id}/`, contactData)
        .then(response => {
          setContacts(prevContacts => 
            prevContacts.map(contact => contact.id === response.data.id ? response.data : contact)
          );
          setEditingContact(null);
        })
        .catch(error => console.error('Error updating contact:', error));
    } else {
      axios.post('/contacts/', contactData)
        .then(response => setContacts(prevContacts => [...prevContacts, response.data]))
        .catch(error => console.error('Error creating contact:', error));
    }

    setName('');
    setEmail('');
    setPhoneNumber('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Company" 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
      />
      <button type="submit">{editingContact ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default ContactForm;

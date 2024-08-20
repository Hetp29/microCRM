import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/react';

const Register = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [employees, setEmployees] = useState('');
  const [companyName, setCompanyName] = useState('');
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register/`, {
        password,
        email,
        name,
        job_title: jobTitle,
        phone,
        employees,
        company_name: companyName
      });
      console.log('Registration successful:', response.data);
      toast({
        title: 'Registration Successful.',
        description: 'You have successfully registered.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error during registration:', error.response?.data);
        toast({
          title: 'Registration Error.',
          description: 'An error occurred during registration.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } else {
        console.error('Unexpected error during registration:', error);
        toast({
          title: 'Unexpected Error.',
          description: 'An unexpected error occurred.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Container maxW="container.md" py={12} bg="gray.50" borderRadius="md" boxShadow="md">
      <Box textAlign="center" mb={8}>
        <Heading size="lg" mb={4}>Register</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </FormControl>
          <FormControl id="job-title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter your job title"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </FormControl>
          <FormControl id="employees" isRequired>
            <FormLabel>Number of Employees</FormLabel>
            <Select
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              placeholder="Select number of employees"
            >
              <option value="1-30">1-30</option>
              <option value="31-300">31-300</option>
              <option value="301-10,000">301-10,000</option>
              <option value="10,001+">10,001+</option>
            </Select>
          </FormControl>
          <FormControl id="company-name" isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter your company name"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button colorScheme="brand" type="submit" size="lg">
            Register
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;

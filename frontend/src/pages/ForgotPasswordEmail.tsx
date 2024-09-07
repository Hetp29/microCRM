

import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleForgotPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/forgot-password/`, { email });
      toast({
        title: 'Email Sent.',
        description: 'Please check your email for a password reset link.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'An error occurred while sending the password reset email.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign="center" py={20}>
      <Heading textColor="black" size="2xl" mb={8}>Forgot Password</Heading>
      <form onSubmit={handleForgotPassword}>
        <Stack spacing={6} maxW="400px" mx="auto">
          <FormControl id="email" isRequired>
            <FormLabel textColor="black">Enter your email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              size="lg"
              borderColor="black"
              textColor="black"
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" size="lg" width="full">
            Send Reset Link
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ForgotPassword;

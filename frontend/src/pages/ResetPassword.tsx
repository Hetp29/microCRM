import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchParams] = useSearchParams(); 
  const token = searchParams.get('token');
  const uid = searchParams.get('uid');
  const toast = useToast();
  const navigate = useNavigate();

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Error.',
        description: 'Passwords do not match.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    console.log('Token:', token)
    console.log('UID:', uid)

    try {
      await axios.post(`${API_BASE_URL}/reset-password/`, { password, token, uid });
      toast({
        title: 'Password Reset Successful.',
        description: 'Your password has been updated.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

      navigate('/login');
      
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'An error occurred while resetting your password.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box textAlign="center" py={20}>
      <Heading size="2xl" textColor="black" mb={8}>Reset Password</Heading>
      <form onSubmit={handleResetPassword}>
        <Stack spacing={6} maxW="400px" mx="auto">
          <FormControl id="password" isRequired>
            <FormLabel textColor="black">New Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              size="lg"
              borderColor="black"
              textColor="black"
            />
          </FormControl>
          <FormControl id="confirmPassword" isRequired>
            <FormLabel textColor="black">Confirm New Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              size="lg"
              textColor="black"
              borderColor="black"
            />
          </FormControl>
          <Button colorScheme="black" type="submit" size="lg" width="full">
            Reset Password
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ResetPassword;

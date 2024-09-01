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
  Stack,
  useToast,
  Flex,
  Image,
  Text,
  Link
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/login/`, {
        email,
        password,
      });
      console.log('User logged in:', response.data);
      toast({
        title: 'Login Successful.',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error during login:', error);
      toast({
        title: 'Login Error.',
        description: 'An error occurred during login.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" py={12}>
      <Box 
        w="full" 
        maxW="1200px" 
        mx="auto" 
        bg="white" 
        boxShadow="lg" 
        borderRadius="md" 
        overflow="hidden"
      >
        <Flex>
          {/* Left Side - Form */}
          <Box flex="1" p={12} bg="white">
            <Container maxW="container.sm">
              <Box textAlign="center" mb={12}>
                <Heading size="xl" mb={6} color="gray.800">Login</Heading>
              </Box>
              <form onSubmit={handleLogin}>
                <Stack spacing={8}>
                  <FormControl id="email" isRequired>
                    <FormLabel fontSize="lg" color="gray.600">Email Address</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      _placeholder={{ color: 'gray.400' }}
                      borderColor="gray.300"
                      borderWidth="1px"
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
                      fontSize="md"
                      textColor='black'
                      py={6}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel fontSize="lg" color="gray.600">Password</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      _placeholder={{ color: 'gray.400' }}
                      borderColor="gray.300"
                      borderWidth="1px"
                      _hover={{ borderColor: 'gray.400' }}
                      _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
                      fontSize="md"
                      textColor='black'
                      py={6}
                    />
                  </FormControl>
                  <Button 
                    colorScheme="brand" 
                    type="submit" 
                    size="lg"
                    width="full"  
                    mt={4}  
                    py={6}
                  >
                    Login
                  </Button>
                  {/* Link to Register Page */}
                  <Text textAlign="center" mt={4} textColor="black">
                    Don't have an account?{' '}
                    <Link as={RouterLink} to="/register" color="blue.500">
                      Create one.
                    </Link>
                  </Text>
                </Stack>
              </form>
            </Container>
          </Box>
          
          {/* Right Side - Image */}
          <Box flex="1" display={{ base: 'none', md: 'block' }}>
            <Image 
              src="/banner.webp" 
              alt="Login illustration" 
              objectFit="cover" 
              w="full" 
              h="100%"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;

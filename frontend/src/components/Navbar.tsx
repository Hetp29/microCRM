import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  return (
    <Box bg="gray.800" color="white" shadow="md">
      <Flex align="center" p={4} maxW="container.lg" mx="auto">
        <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
          Django CRM
        </Link>
        <Spacer />
        <Flex gap={4}>
          {isAuthenticated ? (
            <>
              <Link as={RouterLink} to="/add-record" _hover={{ color: 'gray.400' }}>
                Add Record
              </Link>
              <Link as={RouterLink} to="/logout" _hover={{ color: 'gray.400' }}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link as={RouterLink} to="/register" _hover={{ color: 'gray.400' }}>
                Register
              </Link>
              <Link as={RouterLink} to="/login" _hover={{ color: 'gray.400' }}>
                Login
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

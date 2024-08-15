import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar isAuthenticated={false} />
      <Box
        bgGradient="linear(to-r, blue.500, purple.600)"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <Container textAlign="center" mb={10}>
          <VStack spacing={4}>
            <Heading as="h1" size="2xl" fontWeight="bold">
              Welcome to Django CRM
            </Heading>
            <Text fontSize="xl">Your ultimate customer relationship management tool</Text>
            <Button
              colorScheme="whiteAlpha"
              variant="outline"
              size="lg"
              borderRadius="full"
            >
              Get Started
            </Button>
          </VStack>
        </Container>
        <Container textAlign="center">
          <Heading as="h2" size="lg" fontWeight="semibold" mb={4}>
            Features
          </Heading>
          <Flex wrap="wrap" justify="center" gap={6}>
            {/* Feature Cards */}
            <Box
              bg="white"
              p={6}
              borderRadius="lg"
              shadow="md"
              width="80"
              textAlign="left"
            >
              <Heading as="h3" size="md" mb={2}>
                Feature 1
              </Heading>
              <Text>Description of feature 1 goes here.</Text>
            </Box>
            <Box
              bg="white"
              p={6}
              borderRadius="lg"
              shadow="md"
              width="80"
              textAlign="left"
            >
              <Heading as="h3" size="md" mb={2}>
                Feature 2
              </Heading>
              <Text>Description of feature 2 goes here.</Text>
            </Box>
            <Box
              bg="white"
              p={6}
              borderRadius="lg"
              shadow="md"
              width="80"
              textAlign="left"
            >
              <Heading as="h3" size="md" mb={2}>
                Feature 3
              </Heading>
              <Text>Description of feature 3 goes here.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
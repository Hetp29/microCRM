import { Box, Text, Link, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="white" 
      borderTop="1px solid #e0e0e0" 
      boxShadow="0 -4px 6px rgba(0, 0, 0, 0.1)" 
      color="gray.800" 
      py={2}
      textAlign="center"
      width="100%"
    >
      <Stack spacing={2}>
        <Text>© {new Date().getFullYear()} ClientSync. All rights reserved.</Text>
        <Stack isInline spacing={4} justify="center">
          <Link href="/privacy" color="blue.500">Privacy Policy</Link> {/* Adjusted link color */}
          <Link href="/terms" color="blue.500">Terms of Service</Link> {/* Adjusted link color */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

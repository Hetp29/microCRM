import { Box, Text, Link, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.200" 
      color="gray.800" 
      py={4}
      textAlign="center"
      width="100%"
    >
      <Stack spacing={2}>
        <Text>© {new Date().getFullYear()} Your Company. All rights reserved.</Text>
        <Stack isInline spacing={4} justify="center">
          <Link href="/privacy" color="blue.500">Privacy Policy</Link> {/* Adjusted link color */}
          <Link href="/terms" color="blue.500">Terms of Service</Link> {/* Adjusted link color */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

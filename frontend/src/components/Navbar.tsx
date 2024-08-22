import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
// @ts-ignore
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Features', href: 'features-section' }, 
  { name: 'Pricing', href: 'pricing-section' },
  { name: 'Solutions', href: '/solutions' },
];

const DesktopSidebarContents = ({ name }: any) => {
  return (
    <Container maxW="container.lg" p={0} textColor="black">
      <Flex w="full" justify="space-between" align="center">
        <Flex align="center" ml={4}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Image src="logo.png" alt="Company Logo" width="170px" />
          </Link>
          
        </Flex>
        <Stack
          spacing={[4, 10]}
          direction={['column', 'row']}
          align="center"
        >
          {navLinks.map((navLink: any, i: number) => (
            <ScrollLink to={navLink.href} smooth={true} duration={500} key={`navlink_${i}`}>
            <Box as="span" fontWeight={500} >
              {navLink.name}
            </Box>
          </ScrollLink>
          
          ))}
        </Stack>
      </Flex>
    </Container>
  );
};

const MobileSidebar = ({ name }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="full" align="center" p={4} justify="space-between">
        <Flex align="center">
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Image src="logo.png" alt="Company Logo" width="170px" />
          </Link>
        </Flex>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg="gray.50">
            <DrawerCloseButton />
            <DrawerHeader>{name}</DrawerHeader>
            <DrawerBody>
              <Stack spacing={6} align="center" w="full">
                {navLinks.map((navLink: any, i: number) => (
                  <ScrollLink to={navLink.href} smooth={true} duration={500} key={`navlink_${i}`} onClick={onClose}>
                  <Box as="span" fontWeight={500} width="full" textAlign="center">
                    {navLink.name}
                  </Box>
                </ScrollLink>
                
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};


interface SidebarProps {
  name: string;
}

const Sidebar = ({ name }: SidebarProps) => {
  return (
    <chakra.header id='header'>
      <Box display={{ base: 'flex', md: 'none' }} p={4}>
        <MobileSidebar name={name} />
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} bg="gray.50">
        <DesktopSidebarContents />
      </Box>
    </chakra.header>
  );
};

interface HeaderProps {
  name: string;
}

export const Navbar = ({ name }: HeaderProps) => {
  return (
    <Box w="full">
      <Sidebar name={name} />
    </Box>
  );
};

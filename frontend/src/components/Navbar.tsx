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

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Solutions', href: '/solutions' },
];

const DesktopSidebarContents = ({ name }: any) => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex w="full" justify="space-between" align="center">
        <Flex align="center" ml={4}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Image src="logo.png" alt="Company Logo" width="170px" />
          </Link>
          <Heading fontSize="xl" ml={4}>{name}</Heading>
        </Flex>
        <Stack
          spacing={[4, 10]}
          direction={['column', 'row']}
          align="center"
        >
          {navLinks.map((navLink: any, i: number) => (
            <Link
              href={navLink.href}
              key={`navlink_${i}`}
              fontWeight={500}
              variant="ghost"
            >
              {navLink.name}
            </Link>
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
          <Heading fontSize="xl" ml={2}></Heading>
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
              <DesktopSidebarContents name={name} />
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
        <MobileSidebar />
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

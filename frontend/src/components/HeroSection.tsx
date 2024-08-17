import {
    Button,
    Center,
    Container,
    Heading, 
    Text,
    VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    return (
        <Container maxW="container.lg">
            <Center p={4} minHeight="70vh">
                <VStack>
                    <Container maxW="container.md" textAlign="center">
                        <Heading size = "2xl" mb={4} color="gray.700">
                            Never track your clients again-let us handle it.
                        </Heading>
                        <Text fontSize="cl" color="gray.500">
                            Effortlessly manage client interactions and streamline operations with just a click using our CRM.
                        </Text>
                        <Button 
                            mt={8}
                            colorScheme="brand"
                            onClick={() => {
                                window.location.href = "/register";
                            }}
                            >
                                Get started for free.
                            </Button>
                            <Text my={2} fontSize="sm" color="gray.500">
                                Be an early user-dozens of businesses have joined our CRM in the last 30 days!
                            </Text>
                    </Container>
                </VStack>
            </Center>
        </Container>
    );
};
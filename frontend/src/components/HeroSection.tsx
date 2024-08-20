import {
    Button,
    Center,
    Container,
    Heading, 
    Text,
    VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    return (
        <MotionContainer
            maxW="container.lg"
            mb={1}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Center p={4} minHeight="70vh">
                <VStack>
                    <MotionContainer maxW="container.md" textAlign="center">
                        <MotionHeading size="2xl" mb={4} color="gray.700">
                            Never track your clients again-let us handle it.
                        </MotionHeading>
                        <MotionText fontSize="cl" color="gray.500">
                            Effortlessly manage client interactions and streamline operations with just a click using our CRM.
                        </MotionText>
                        <MotionButton 
                            mt={8}
                            colorScheme="brand"
                            onClick={() => {
                                window.location.href = "/register";
                            }}
                        >
                            Get started for free.
                        </MotionButton>
                        <MotionText my={2} fontSize="sm" color="gray.500">
                            Be an early user-dozens of businesses have joined our CRM in the last 30 days!
                        </MotionText>
                    </MotionContainer>
                </VStack>
            </Center>
        </MotionContainer>
    );
};
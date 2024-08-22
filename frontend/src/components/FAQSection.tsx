import {
    Accordion, 
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
    Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export interface FAQType {
    q: string;
    a: string;
}

interface FAQSectionProps {
    items?: FAQType[];
}

const faqs: FAQType[] = [
    {
        q: 'What integrations does the CRM support?',
        a: 'Our CRM seamlessly integrates with popular tools like Notion, PipeDrive, and various financial data providers, allowing you to access live financial information directly within the platform.',
    },
    {
        q: 'Can I manage multiple workspaces and clients?',
        a: 'Yes, our CRM is designed to handle multiple workspaces and clients efficiently. With the Pro plan, you can manage an unlimited number of clients and customize workspaces to suit different projects or teams.',
    },
    {
        q: 'How secure is my data within the CRM?',
        a: 'We prioritize security with end-to-end encryption, regular security audits, and compliance with industry standards. Your data is safe, and you have full control over access permissions.',
    },
    {
        q: 'Can I automate my workflow within the CRM?',
        a: 'Absolutely! Our CRM includes powerful automation tools that allow you to create custom workflows, automate repetitive tasks, and streamline your client management processes.',
    },
    {
        q: 'Is there support for team collaboration?',
        a: 'Yes, the CRM is built with collaboration in mind. You can invite team members, assign roles, and work together in real-time on tasks, notes, and projects.',
    },
    {
        q: 'Can I track and manage sales pipelines with the CRM?',
        a: 'Yes, our CRM includes a robust sales pipeline management feature. You can track leads, monitor sales progress, and analyze pipeline data to optimize your sales strategy. Customizable stages and real-time updates ensure that you stay on top of your sales process.',
    }
];


const AnimatedBox = motion(Box);
const AnimatedHeading = motion(Heading);
const AnimatedAccordion = motion(Accordion);

export const FAQSection = ({ items = faqs }: FAQSectionProps) => {
    return (
        <AnimatedBox
            w="full"
            py={12}
            bg="gray.50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Container maxW="container.2xl" px={8}>
                <Stack spacing={8} align="center">
                    <AnimatedHeading
                        size="2xl"
                        mb={4}
                        color="gray.700"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Frequently Asked Questions
                    </AnimatedHeading>
                    <AnimatedAccordion 
                        allowToggle 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                        textColor="gray.500"
                    >
                        {items.map((item, i) => (
                            <AccordionItem key={`faq_${i}`}>
                                <Box width="100%"> {/* Ensures the width is consistent */}
                                    <h2>
                                        <AccordionButton
                                            _expanded={{ bg: 'gray.200' }} // Optional: Highlight expanded state
                                            px={4}
                                            py={3}
                                            width="100%" // Ensures the button takes full width
                                            display="flex"
                                            alignItems="center"
                                        >
                                            <Box flex="1" textAlign="left">
                                                {item.q}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel 
                                        pb={4} 
                                        maxH="150px" // Max height to limit the panel size
                                        overflowY="auto" // Allows scroll if content exceeds max height
                                    >
                                        {item.a}
                                    </AccordionPanel>
                                </Box>
                            </AccordionItem>
                        ))}
                    </AnimatedAccordion>
                </Stack>
            </Container>
        </AnimatedBox>
    );
};

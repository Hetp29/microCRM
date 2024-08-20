import {
    Box,
    Button,
    Center,
    Container,
    Grid,
    GridItem,
    Stack,
    Text,
    VStack,
    Heading,
  } from "@chakra-ui/react";
  import { FunctionComponent } from "react";
  import { motion } from "framer-motion";

  const AnimatedBox = motion(Box);
  
  interface FeatureProps {
    title: string;
    description: string;
    reverse?: boolean;
  }
  
  const Feature: FunctionComponent<FeatureProps> = ({
    title,
    description,
    reverse,
  }: FeatureProps) => {
    const rowDirection = reverse ? "row-reverse" : "row";
    const animationProps = {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    };
  
    return (
      <AnimatedBox {...animationProps} w="full" minH="auto" mb={8}>
        <Container maxW="container.xl" rounded="lg">
          <Stack
            spacing={[4, 16]}
            alignItems="center"
            direction={["column", null, rowDirection]}
            w="full"
          >
            <VStack maxW={500} spacing={4} align={["center", "flex-start"]}>
              <Box>
                <Text fontSize="3xl" fontWeight={600} align={["center", "left"]}>
                  {title}
                </Text>
              </Box>
              <Text fontSize="md" color="gray.500" textAlign={["center", "left"]}>
                {description}
              </Text>
              <Button
                colorScheme="brand"
                variant="link"
                textAlign={["center", "left"]}
              >
                Learn more →
              </Button>
            </VStack>
          </Stack>
        </Container>
      </AnimatedBox>
    );
  };
  
  
  const features = [
    { title: "Trade Advice", description: "Receive algorithm-driven trade suggestions based on client data." },
    { title: "Risk Management", description: "Assess and manage risks associated with client portfolios." },
    { title: "Advanced Analytics", description: "Generate detailed reports and visualizations for better insights." },
    { title: "Integration with Financial Data Providers", description: "Integrate with financial data providers to access live financial information." },
    { title: "Client Communication Tools", description: "Communicate with clients via integrated email and messaging." },
    { title: "Automation and Workflow Management", description: "Automate tasks and manage workflows efficiently and seamlessly.." },
  ];
  
  export const FeaturesSection: FunctionComponent = () => {
    return (
      <Center w="full" minH="auto" py={12} bg="gray.50" id="features-section">
        <Container maxW="container.xl">
          <Stack spacing={8} mb={12} align="center">
            <Heading size = "2xl" mb={4} color="gray.700">
              Features
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {features.map((feature, index) => (
                <GridItem key={index}>
                  <Feature
                    title={feature.title}
                    description={feature.description}
                    reverse={index % 2 === 0}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Center>
    );
  };
import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

const ImageSection: React.FC = () => {
    return (
        <MotionBox
            textAlign="center"
            mb={10}
            pt={1}
            bg="transparent"  // Ensure no background color
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <MotionHeading
                size="2xl"
                mb={14} 
                color="gray.700"
                bg="transparent"  // Ensure no background color
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Stay Productive
            </MotionHeading>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="transparent"  // Ensure no background color
            >
                <MotionImage 
                    src={`${process.env.PUBLIC_URL}/bannerForNow.png`}
                    alt="Description of the image"
                    maxWidth="100%"
                    height="auto"
                    bg="transparent"  // Ensure no background color
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
            </Box>
        </MotionBox>
    );
}

export default ImageSection;

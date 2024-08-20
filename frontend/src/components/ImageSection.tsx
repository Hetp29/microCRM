import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

const ImageSection: React.FC = () => {
    return (
        <Box textAlign="center" mb={10} pt={1}>
            <Heading size="2xl" mb={14} color="gray.800">
                Stay Productive
            </Heading>
            <Box display="flex" justifyContent="center" alignItems="center">
            <Image 
                src={`${process.env.PUBLIC_URL}/bannerForNow.png`}
                alt="Description of the image"
                maxWidth="100%"
                height="auto"
            />
            </Box>
        </Box>
    );
}

export default ImageSection;

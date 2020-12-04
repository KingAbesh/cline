import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import youtube from '../../assets/images/youtube.png';

export const YouTube = ({ src, heading, alt }) => {
  return (
    <Flex
      bgColor="#FFFFFF"
      borderRadius="10px"
      h={{ base: '40vh', sm: '40vh', lg: 'auto' }}
      flexDir="column"
      flex={1}
      mt={4}
      justify="space-between"
    >
      <Flex align="center" px={4} py={4}>
        <Image src={src} alt={alt} w={{ base: "40px", md: "70px" }} h={{ base: "40px", md: "70px" }} />
        <Text color="grey" textAlign="start" fontSize={{ base: '0.9rem', md: '1.1rem' }} ml={2}>
          {heading}
        </Text>
      </Flex>
      <Flex
        bgImage={`url(${youtube})`}
        flex={1}
        backgroundPosition="center"
        backgroundSize="cover"
      ></Flex>
    </Flex>
  );
};

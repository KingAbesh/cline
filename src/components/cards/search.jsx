import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import search from '../../assets/images/search.png';

export const Search = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Flex
      bgColor="#FFFFFF"
      borderRadius="10px"
      borderColor='cline.purple'
      borderWidth={clicked ? "2px" : ""}
      h={{ base: '50%', lg: 'auto' }}
      flex={1}
      mb={4}
      px={2}
      py={4}
      onClick={() => setClicked(clicked => !clicked)}
    >
      <Flex flexDir="column" flex="1" justify="center" px={4}>
        <Flex flexDir="column">
          <Text fontWeight="bold" fontSize="1.2rem" textAlign="start" mb={4}>
            Search
          </Text>
          <Text color="grey" textAlign="start" fontSize="1.1rem" mb={4}>
            Your home base for all your resources
          </Text>
        </Flex>
        <Flex justify="space-between" align="center">
          <Button
            backgroundColor="cline.purple"
            color="white"
            w="60%"
            borderRadius="30px"
            boxShadow="0px 0px 6px -1px rgba(0,0,0,0.75)"
            _hover={{ backgroundColor: 'cline.purple', opacity: '0.8' }}
            _active={{
              backgroundColor: 'cline.purple',
              opacity: '0.8',
              outline: 'none',
            }}
            _focus={{ outline: 'none' }}
          >
            Tour
          </Button>
          <Link to="!#" color="cline.purple" opacity="0.8">
            Got it
          </Link>
        </Flex>
      </Flex>
      <Flex flex="1" w="50%" overflow="hidden" p={4}>
        <Image src={search} alt="search image" />
      </Flex>
    </Flex>
  );
};

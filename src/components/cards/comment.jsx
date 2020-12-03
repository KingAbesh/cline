import { Flex, Image, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { RoundedButton } from '../buttons/rounded-button';

export const Comment = ({ flex, src, alt, heading, text, subtext }) => {
  return (
    <Flex
      bgColor="#FFFFFF"
      borderRadius="10px"
      h="auto"
      flexDir="column"
      flex={flex}
      justify="space-between"
      px={6}
      py={8}
    >
      <Flex align="center">
        <Image src={src} alt={alt} w="70px" h="70px" />
        <Text color="grey" textAlign="start" fontSize="1.1rem" ml={4}>
          {heading}
        </Text>
      </Flex>
      <Flex flexDir="column">
        <Text
          fontWeight="700"
          fontSize="1.4rem"
          textAlign="start"
          my={4}
        >
          {text}
        </Text>
        <Text
          color="grey"
          textAlign="start"
          fontSize="1.1rem"
          lineHeight="40px"
          wordBreak="break-word"
        >
          {subtext}
        </Text>
      </Flex>
      <Flex align="center" mt={2}>
        <Link to="!#" color="cline.purple" opacity="0.8">
          Repost
        </Link>
        <Text
          color="cline.purple"
          textAlign="start"
          //   fontSize="1.1rem"
          mx={2}
        >
          &bull;
        </Text>
        <Link to="!#" color="cline.purple" opacity="0.8">
          Share
        </Link>
      </Flex>
      <Flex mt={4} align="center">
        <RoundedButton color="#000000" content="F" px="30px"/>
        <Input
          variant="filled"
          placeholder="Add a comment"
          ml={4}
          backgroundColor="cline.light-gray"
          _focus={{ outline: 'none' }}
          borderRadius="40px"
        />
      </Flex>
    </Flex>
  );
};

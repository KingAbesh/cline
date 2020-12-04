import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import edtwist from '../../assets/icons/edtwist.png';
import thunder from '../../assets/icons/thunder.png';
import { RoundedButton } from '../buttons/rounded-button';

export const Nav = ({openNavBar}) => {
  return (
    <Flex
      w="100%"
      py={4}
      px={4}
      boxShadow="0px 5px 15px -10px rgba(0,0,0,0.75)"
      justify="space-between"
    >
      <Flex flex={{ base: 1.3, lg: 0.7 }} align="center">
        <Image src={edtwist} alt="edtwist" h="40px" w="40px" mr={4} />
        <InputGroup flex={1} mr={4} d={{ base: 'none', md: 'flex' }}>
          <Input
            variant="filled"
            backgroundColor="cline.light-gray"
            _focus={{ outline: 'none' }}
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
        <Text color="#808080" opacity="0.8" d={{ base: 'none', md: 'flex' }}>
          Help
        </Text>
      </Flex>
      <Flex justify="flex-end" flex={1.3} align="center" d={{ base: 'none', md: 'flex' }}>
        <Image src={thunder} alt="edtwist" h="40px" w="40px" />
        <RoundedButton color="cline.purple" content="+" px="40px" ml={4} />
        <RoundedButton color="#000000" content="F" px="40px" ml={4} />
      </Flex>
      <Box
        onClick={openNavBar}
        cursor="pointer"
        mt={2}
        d={{ base: 'block', md: 'none' }}
      >
        <Box w={8} h="3px" backgroundColor="cline.gray" mb={2} />
        <Box w={8} h="3px" backgroundColor="cline.gray" mb={2} />
        <Box w={8} h="3px" backgroundColor="cline.gray" mb={2} />
      </Box>
    </Flex>
  );
};

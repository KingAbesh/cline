import {
  Flex,
  Input,
  Text,
  InputRightElement,
  InputGroup,
  Image,
} from '@chakra-ui/react';
import { navItems } from '../../constants';
import { CustomText } from '../custom-text/custom-text';

export const SideNav = () => {


  return (
    <Flex maxW="20%" w="20%" flexDir="column" justify="flex-start" d={{ base: 'none', md: 'flex' }}>
      <InputGroup>
        <Input
          variant="filled"
          placeholder="All"
          backgroundColor="cline.alt-gray"
          _focus={{ outline: 'none' }}
        />
        <InputRightElement
          w="auto"
          children={<Text as="span">34 Results</Text>}
        />
      </InputGroup>
      <CustomText content="Images" pt={4} ml={4} />
      <CustomText content="Videos" pt={8} ml={4} />
      <Text textAlign="start" fontSize="1.2rem" fontWeight="600" ml={4} mt={16}>
        Sources
      </Text>
      {navItems.map((item, index) => {
        return (
          <Flex align="flex-end" mt={2} key={index}>
            <Image src={item.icon} alt={item.title} h="40px" w="40px" mr={4} />
            <CustomText content={item.title} ml={2} />
          </Flex>
        );
      })}
    </Flex>
  );
};

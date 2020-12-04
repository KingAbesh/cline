import {
  Box,
  Text,
  Flex,
  Link,
  Image,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import edtwist from '../../assets/icons/edtwist.png';
import { CustomText } from '../custom-text/custom-text';
import { navItems } from '../../constants';
import { Container } from '../container';
import { RoundedButton } from '../buttons/rounded-button';
import thunder from '../../assets/icons/thunder.png';

const MobileNav = ({ removeNavbarHandler, mobileNavOpen }) => {
  return (
    <Box
      position="fixed"
      overflowY="scroll"
      zIndex="10"
      top="0"
      left="0"
      minHeight="100vh"
      h="100vh"
      width="100%"
      backgroundColor="#FFFFFF"
      d={mobileNavOpen ? 'block' : 'none'}
    >
      <Container>
        <Flex mb="3rem" justify="space-between" align="center" mt={2}>
          <Link
            href="#!"
            _hover={{ textDecoration: 'none' }}
            position="relative"
          >
            <Image
              _hover={{ transform: 'scale(1.1)' }}
              transition=".3s ease-out"
              w="40px"
              h="40px"
              alt="Logo"
              src={edtwist}
            />
          </Link>
          <Box
            position="relative"
            onClick={removeNavbarHandler}
            cursor="pointer"
            d={{ base: 'block', md: 'none' }}
          >
            <Box
              position="absolute"
              transform="rotate(45deg)"
              w={8}
              h="3px"
              backgroundColor="cline.gray"
              mb={2}
            />
            <Box
              transform="rotate(135deg)"
              w={8}
              h="3px"
              backgroundColor="cline.gray"
              mb={2}
            />
          </Box>
        </Flex>

        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          flexDir="column"
          h="auto"
          mb={4}
        //   height="60vh"
        >
          <Flex justify="space-around" align="center" flex="1" w="100%" mb={8}>
            <Image src={thunder} alt="edtwist" h="40px" w="40px" />
            <RoundedButton color="cline.purple" content="+" px="40px" ml={4} />
            <RoundedButton color="#000000" content="F" px="40px" ml={4} />
          </Flex>
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
          <CustomText content="Images" pt={6} ml={4} />
          <CustomText content="Videos" pt={8} ml={4} />
          <Text
            textAlign="start"
            fontSize="1.2rem"
            fontWeight="600"
            ml={4}
            mt={16}
          >
            Sources
          </Text>
          {navItems.map((item, index) => {
            return (
              <Flex align="flex-end" my={2} key={index}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  h="40px"
                  w="40px"
                  mr={4}
                />
                <CustomText content={item.title} ml={2} />
              </Flex>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default MobileNav;

import {
  Button,
  Flex,
  Image,
  Input,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';
import './index.css';
import google from '../../assets/icons/google.svg';
import { Link as ReactLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { ShowMessage } from '../../utils/alert';
import { useGoogleLogout } from 'react-google-login';
import { useEffect } from 'react';

const clientId = process.env.REACT_GOOGLE_KEY;

export const Login = props => {
  const toast = useToast();

  const onLogoutSuccess = () => {};

  const onLogoutFailure = () => {};

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure: onLogoutFailure,
  });

  const onSuccess = res => {
    ShowMessage(
      'Success',
      `Logged in as ${res.profileObj.name}`,
      'success',
      toast,
      5000
    );
    refreshTokenSetup(res);
    props.history.push('/dashboard');
  };

  const onFailure = res => {
    ShowMessage('Error', 'Failed to log in', 'error', toast);
  };

  // this is just to ensure you can navigate to this page and test this feature as much as you can
  useEffect(() => {
    signOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      minH={'100vh'}
      py={4}
      flexDirection="column"
      justify="center"
      backgroundColor="cline.light-gray"
    >
      <Zoom opposite>
        <Flex
          flex={1}
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          justify="center"
          align="center"
        >
          <Flex
            justify="center"
            textAlign="center"
            flex={[1, 1, 0.7, 0.8, 1]}
            flexDirection="column"
            px="32"
            pr="16"
            display={['none', 'none', 'none', 'none', 'flex']}
          >
            <Text
              as="h5"
              fontSize="3.3rem"
              lineHeight="68px"
              letterSpacing="-1px"
              width="70%"
            >
              Welcome to Cline.
            </Text>
            <Text mt={8} lineHeight="31px" width="70%">
              We’re building the one toolkit you need for starting and growing
              cohort-based, live learning programs — courses, bootcamps,
              coaching and more — in engaged communities.
            </Text>
          </Flex>
          <Flex
            flex="1"
            align="center"
            width={['96%', '90%', '90%', '80%', '50%']}
            justify="center"
          >
            <Flex
              flexDirection="column"
              backgroundColor="white"
              height={['95%', '95%', '95%', '83%', '83%']}
              width={['100%', '100%', '70%', '80%', '80%']}
              borderRadius="10px"
              align="center"
              py={12}
            >
              <Text
                mb={6}
                fontSize="2.5rem"
                lineHeight="34px"
                letterSpacing="-0.55px"
              >
                Sign In
              </Text>
              <Flex
                mb={6}
                overflow="hidden"
                borderRadius="4.56667px"
                w="100%"
                justify="center"
              >
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  render={({ onClick }) => (
                    <Button
                      backgroundColor="black"
                      color="white"
                      onClick={onClick}
                      h="50px"
                      w={['80%', '80%', '75%', '60%', '60%']}
                      borderRadius="4.56667px"
                      _hover={{ opacity: '0.7' }}
                      _active={{ transform: 'scale(0.98)' }}
                      _focus={{ outline: 'none' }}
                    >
                      <Flex
                        borderRightStyle="solid"
                        borderRightWidth="0.1px"
                        borderRightColor="#D8E3FE"
                        height="100%"
                        align="center"
                        justify="center"
                        pr={2}
                        flex="0.5"
                      >
                        <Image src={google} alt="google" />
                      </Flex>
                      <Flex flex="5" px="8" textAlign="center">
                        <Text
                          fontWeight="bold"
                          fontSize="0.9rem"
                          lineHeight="18px"
                          letterSpacing="-0.380556px"
                          textAlign="center"
                          margin="0 auto"
                        >
                          Sign in via Gmail
                        </Text>
                      </Flex>
                    </Button>
                  )}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              </Flex>
              <Flex w="100%" mb={6}>
                <div className="divider">
                  <Text as="span" fontWeight="bold" lineHeight="24px">
                    or
                  </Text>
                </div>
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text as="small" fontSize="0.9rem" lineHeight="28px">
                  Email Address
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Input
                  placeholder="Email"
                  minHeight={['1.5rem', '1.5rem', '1.5rem', '2.5rem', '3rem']}
                  px={6}
                  width="100%"
                  fontSize="0.8rem"
                  _focus={{ bg: 'white' }}
                  borderRadius="6px"
                  opacity="0.9"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                />
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text as="small" fontSize="0.9rem" lineHeight="28px">
                  Password
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]}>
                <Input
                  placeholder="Password"
                  minHeight={['1.5rem', '1.5rem', '1.5rem', '2.5rem', '3rem']}
                  px={6}
                  width="100%"
                  fontSize="0.8rem"
                  _focus={{ bg: 'white' }}
                  borderRadius="6px"
                  opacity="0.9"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                />
              </Flex>
              <Flex mt={12} w="100%" justify="center" align="center">
                <Button
                  backgroundColor="black"
                  color="white"
                  h="50px"
                  w={['70%', '65%', '50%', '40%', '40%']}
                  borderRadius="4.56667px"
                  _hover={{ opacity: '0.7' }}
                  _active={{ transform: 'scale(0.98)' }}
                  _focus={{ outline: 'none' }}
                >
                  <Text
                    fontWeight="bold"
                    fontSize="0.9rem"
                    lineHeight="18px"
                    letterSpacing="-0.380556px"
                    textAlign="center"
                    margin="0 auto"
                  >
                    Sign in
                  </Text>
                </Button>
              </Flex>
              <Flex mt={8} justify="center" align="center">
                <Text
                  textTransform="uppercase"
                  as="span"
                  display="inline-block"
                  mr={4}
                  fontWeight="bold"
                  fontSize={['0.8rem', '0.8rem', '0.9rem', '1rem', '1rem']}
                  lineHeight="20px"
                  letterSpacing="1.08333px"
                >
                  Don't have an account ?
                </Text>
                <Link
                  as={ReactLink}
                  textTransform="uppercase"
                  to="!#"
                  fontSize={['0.8rem', '0.8rem', '0.9rem', '1rem', '1rem']}
                  lineHeight="20px"
                  letterSpacing="1.08333px"
                  fontWeight="bold"
                  _hover={{ opacity: '0.7' }}
                  _focus={{ outline: 'none' }}
                  cursor="pointer"
                >
                  Sign up
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Zoom>
    </Flex>
  );
};

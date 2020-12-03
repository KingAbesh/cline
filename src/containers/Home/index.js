import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Body } from '../../components/body';
import MobileNav from '../../components/mobile-nav/MobileNav';
import { Nav } from '../../components/Nav';

export const Home = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const removeNavbarHandler = () => {
    setMobileNavOpen(false);
  };

  const openNavbar = () => {
    setMobileNavOpen(true);
  };

  return (
    <Fade>
    <Flex flexDir="column" minH="100vh">
      <MobileNav
        mobileNavOpen={mobileNavOpen}
        removeNavbarHandler={removeNavbarHandler}
      />
      <Nav openNavBar={openNavbar} />
      <Body />
    </Flex>
    </Fade>
  );
};

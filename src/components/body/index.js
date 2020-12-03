import { Flex } from '@chakra-ui/react';
import { Content } from '../content/content';
import { SideNav } from '../sidenav';
export const Body = () => {
  return (
    <Flex w="100%" backgroundColor="cline.light-gray" flex="1" pt={8} px={4} pb={2}>
      <SideNav />
      <Content />
    </Flex>
  );
};

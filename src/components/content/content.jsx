import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Comment } from '../cards/comment';
import { Search } from '../cards/search';
import nypl from '../../assets/icons/nypl.png';
import khan from '../../assets/icons/khan.png';
import youtube from '../../assets/icons/youtube.png';
import { YouTube } from '../cards/youtube';

export const Content = () => {
  return (
    <Flex
      pl={{ base: 0, md: 8 }}
      flex="1"
      flexWrap="wrap"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Flex
        flexDir="column"
        flex="1"
        w={{ base: "100%", lg: "50%"}}
      >
        <Search />
        <Comment
          flex={3}
          src={nypl}
          alt="search"
          heading="New York Public Library"
          text="A silicon valley adventure"
          subtext="Kaplan, a well-known figure in the computer industry, founded GO Corporation in 1987, and for several years it was one of the hottest new ventures in the Valley. Startup tells the story of Kaplan's wild ride: how he assembled a brilliant but fractious team of engineers, software designers, and investors; pioneered the emerging market for hand-held computers operated with a pen instead of a keyboard; and careened from crisis to crisis without ever losing his passion for a revolutionary idea"
        />
      </Flex>
      <Flex
        flex="1"
        w={{ base: "100%", lg: "50%"}}
        flexDir="column"
        ml={{ base: 0, lg: 4 }}
        mt={{ base: 4, md: 0 }}
      >
        <Comment
          flex={1}
          src={khan}
          alt="search"
          heading="Khan Academy"
          text="Late night ideas "
          subtext="The other possibility is that tilt doesn't give a shit about me, since I'm a man over the age of 37. It's those darn millennials, raised on shrieking commercials and brain-rotting soda pop, that they wish to woo. "
        />
        <YouTube src={youtube} heading="YouTube" />
      </Flex>
    </Flex>
  );
};

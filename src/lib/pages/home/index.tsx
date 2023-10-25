import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Hero from '~/lib/components/sections/Hero';

const Home = () => {
  return (
    <Flex direction="column" minHeight="70vh" gap={4} mb={8} w="full" h="full">
      <NextSeo title="Home" />

      <Hero />
    </Flex>
  );
};

export default Home;

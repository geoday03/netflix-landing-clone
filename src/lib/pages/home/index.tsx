import { Flex, StackDivider, VStack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Availability from '~/lib/components/sections/Availability';
import Compatibility from '~/lib/components/sections/Compatibility';
import FAQ from '~/lib/components/sections/faq';
import Hero from '~/lib/components/sections/Hero';

const Home = () => {
  return (
    <Flex
      direction="column"
      minHeight="70vh"
      gap="10vh"
      mb={8}
      w="full"
      h="full"
    >
      <NextSeo title="Home" />

      <Hero />

      <VStack
        spacing={8}
        w="full"
        h="full"
        align="center"
        justify="center"
        divider={<StackDivider borderColor="blackAlpha" borderWidth="7px" />}
      >
        <Compatibility />

        <Availability />
      </VStack>

      <FAQ />
    </Flex>
  );
};

export default Home;

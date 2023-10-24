import { Box, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { NextSeo } from 'next-seo';

import Header from '~/lib/layout/Header';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      h="full"
    >
      <NextSeo title="Home" />

      <NextImage
        src="/hero.jpg"
        layout="responsive"
        alt="Hero Image"
        width={2000}
        height={1125}
      />

      <Flex
        flexDirection="column"
        w="full"
        h="full"
        mb="auto"
        bgGradient="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"
      >
        <Box w="full" mb="auto">
          <Header />
        </Box>

        <Text>I am a normal text</Text>

        <Text fontFamily="inter">I am Inter text</Text>
      </Flex>
    </Flex>
  );
};

export default Home;

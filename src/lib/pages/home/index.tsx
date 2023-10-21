import { Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

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
      bg="white"
    >
      <NextSeo title="Home" />

      <Text>I am a normal text</Text>

      <Text fontFamily="inter">I am Inter text</Text>
    </Flex>
  );
};

export default Home;

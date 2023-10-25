import { Box, Flex, Image } from '@chakra-ui/react';

import Header from '~/lib/layout/Header';

export default function Hero() {
  return (
    <Flex w="full" h="full" direction="column">
      <Image src="/hero.jpg" position="fixed" />

      <Flex
        position="relative"
        bgGradient="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"
      >
        <Header />
      </Flex>
    </Flex>
  );
}

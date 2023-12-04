import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import Header from '~/lib/layout/Header';

import Promotion from './Promotion';

export default function Hero() {
  return (
    <Flex w="full" h="full" direction="column">
      <Flex
        direction="column"
        position="relative"
        bgImage="/hero.jpg"
        bgSize="cover"
        bgPos="right"
      >
        <Box bgGradient="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)">
          <Box w="full" px={{ base: '.5em', md: '2em' }}>
            <Header />
          </Box>

          <VStack px="2em" textAlign="center" pt={{ base: '7em', md: '13em' }}>
            <Heading fontSize={{ base: '2rem', md: '4rem' }} mb="1em">
              Unlimited movies, TV shows, and more
            </Heading>

            <Text fontSize="1.2rem" fontWeight="500" mb="1em">
              Watch anywhere. Cancel anytime.
            </Text>

            <Text fontSize="1.2rem" fontWeight="500" mb="3em">
              Ready to watch? Enter your email to create or restart your
              membership.
            </Text>

            <Stack flexDirection={{ base: 'column', md: 'row' }} gap={4}>
              <Input
                variant="outline"
                type="email"
                size="lg"
                placeholder="Email address"
                colorScheme="blackAlpha"
                bg="blackAlpha.700"
                w={{ base: '75vw', md: '30vw' }}
                _placeholder={{ color: 'gray.500' }}
              />

              <Button variant="netflix" size="lg" px="2em" mb="20vh">
                Get Started
              </Button>
            </Stack>
          </VStack>
        </Box>
      </Flex>

      <Promotion />
    </Flex>
  );
}

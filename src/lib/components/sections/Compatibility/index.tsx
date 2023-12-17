import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';

export default function Compatibility() {
  return (
    <VStack spacing={8} w="full" h="full" align="center" justify="center">
      <Heading fontSize="2rem" mb="1em">
        Enjoy on your TV
      </Heading>

      <Box textAlign="center" px="2em">
        <Text fontSize="1.3rem">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </Text>
      </Box>

      <Stack flexDirection="row" w="full" justify="center">
        <Image
          overflow="clip"
          src="/tv.png"
          alt="TV"
          pos="relative"
          zIndex={90}
          bg="rgba(0,0,0,0)"
        />

        <Box position="absolute" m="auto" mt={{ base: '5vh', md: '99px' }}>
          <video autoPlay playsInline muted loop width="auto">
            <source src="/video-tv-0819.m4v" type="video/mp4" />
          </video>
        </Box>
      </Stack>
    </VStack>
  );
}

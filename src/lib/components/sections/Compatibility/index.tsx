import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';

export default function Compatibility() {
  return (
    <VStack mx="5vw" w="full" h="full">
      <Heading>Enjoy on your TV</Heading>

      <Box textAlign="center">
        <Text fontSize="1.125rem">
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
          bgColor="rgba(0,0,0,0)"
          zIndex={90}
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

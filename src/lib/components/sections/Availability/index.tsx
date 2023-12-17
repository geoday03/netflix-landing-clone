import {
  AspectRatio,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Availability() {
  return (
    <VStack spacing={8} w="full" h="full" align="center" justify="center">
      <Heading>Watch everywhere</Heading>

      <Text>
        Stream unlimited movies and TV shows on your phone, tablet, laptop and
        TV.
      </Text>

      <Stack pos="relative" flexDirection="row" justify="center">
        <Image
          overflow="clip"
          src="/device-pile.png"
          alt="TV"
          pos="relative"
          bgColor="rgba(0,0,0,0)"
          zIndex={90}
        />

        <AspectRatio
          w="full"
          h="full"
          maxW="63%"
          maxH="47%"
          top="34%"
          left="50%"
          ratio={4 / 3}
          pos="absolute"
          overflow="hidden"
          transform="translate(-50%, -50%)"
        >
          <video autoPlay playsInline muted loop>
            <source src="/video-devices.m4v" type="video/mp4" />
          </video>
        </AspectRatio>
      </Stack>
    </VStack>
  );
}

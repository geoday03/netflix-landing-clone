import { HStack, Heading, Text, VStack } from '@chakra-ui/react';

import { PopcornIcon } from '../../icons/PopcornIcon';

export default function Promotion() {
  return (
    <HStack
      mx="auto"
      p="1.375em"
      w="85vw"
      bgGradient="radial-gradient(
        51.39% 511.66% at 47.68% -217.91%,
        #ff9900 0%,
        #e50914 17.27%,
        #0e1b4f 79.44%,
        #000413 100%
    )"
      boxShadow={{
        base: 'unset',
        md: 'unset',
        lg: '0px -8px 25px rgba(0, 0, 0, 0.5)',
      }}
      justifyContent="center"
      spacing={6}
    >
      <PopcornIcon boxSize="6em" />

      <VStack>
        <Heading fontSize="1.25rem">
          The Netflix you love for just $6.99.
        </Heading>

        <Text fontSize="1rem" mr="auto">
          Get the Standard with ads plan.
        </Text>
      </VStack>
    </HStack>
  );
}

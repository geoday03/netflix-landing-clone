import { type ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'full',
  },
  variants: {
    netflix: {
      bg: '#E50914',
      color: 'white',
      _hover: {
        bg: '#E50914',
      },
      rounded: 6,
    },
  },
};

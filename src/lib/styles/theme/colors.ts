import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors = {
  background: '#000',
  
  text: '#FFFF',

  brand: {
    primary: ''
  }
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

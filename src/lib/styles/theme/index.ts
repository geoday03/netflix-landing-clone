import type { StyleFunctionProps } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        color: props.colorMode === 'light' ? 'text.light' : 'text.dark',
        bg: props.colorMode === 'light' ? 'background.light' : '#000000',
      },
    }),
  },
  fonts,
  colors,
  config,
  components,
});

export default customTheme;

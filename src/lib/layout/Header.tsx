import { DragHandleIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useDisclosure,
  useStyleConfig,
} from '@chakra-ui/react';
import { useState } from 'react';

import { NetflixIcon } from '../components/icons/NetflixIcon';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const netflixButtonStyle = useStyleConfig('Button', { variant: 'netflix' });

  const [language, setLanguage] = useState('English');

  const languageDisplay = useBreakpointValue({
    base: '',
    md: language,
  });

  return (
    <Flex
      as="header"
      width="full"
      position="relative"
      align="center"
      justify="center"
      textAlign="center"
      p="1em"
    >
      <Box color="red">
        <IconButton
          variant="unstyled"
          aria-label="Netflix Home"
          icon={
            <NetflixIcon
              width="9em"
              color="red"
              height="2em"
              maxW="max-content"
            />
          }
        />
      </Box>

      <HStack ml="auto">
        <Box className="languages-header">
          <Menu isOpen={isOpen}>
            <MenuButton
              as={Button}
              onClick={onToggle}
              rounded={6}
              variant="outline"
              leftIcon={<DragHandleIcon />}
              rightIcon={<ChevronDownIcon />}
            >
              {languageDisplay}
            </MenuButton>

            <MenuList>
              <MenuItem onClick={() => setLanguage('English')}>
                English
              </MenuItem>

              <MenuItem onClick={() => setLanguage('Spanish')}>
                Spanish
              </MenuItem>
              <MenuItem onClick={() => setLanguage('German')}>German</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Button
          __css={netflixButtonStyle}
          fontSize={{ base: '0.8rem', md: '1rem' }}
          size={{ base: 'sm', md: 'lg' }}
          whiteSpace="nowrap"
        >
          Sign In
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;

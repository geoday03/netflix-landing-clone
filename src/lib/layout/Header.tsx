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
  useDisclosure,
  useStyleConfig,
} from '@chakra-ui/react';
import { useState } from 'react';

import { NetflixIcon } from '../components/icons/NetflixIcon';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const netflixButtonStyle = useStyleConfig('Button', { variant: 'netflix' });

  const [language, setLanguage] = useState('English');

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
      <Box mr="auto" ml={4} color="red">
        <IconButton
          variant="unstyled"
          aria-label="Netflix Home"
          icon={<NetflixIcon width="9em" color="red" height="2em" />}
        />
      </Box>

      <HStack>
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
              {language}
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

        <Button __css={netflixButtonStyle}>Sign In</Button>
      </HStack>
    </Flex>
  );
};

export default Header;

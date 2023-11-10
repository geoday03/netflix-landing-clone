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

import { NetflixIcon } from '../components/icons/NetflixIcon';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const netflixButtonStyle = useStyleConfig('Button', { variant: 'netflix' });

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
          aria-label="Netflix Home"
          icon={<NetflixIcon width="89px" color="red" height="24px" />}
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
              English
            </MenuButton>

            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>Spanish</MenuItem>
              <MenuItem>German</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Button __css={netflixButtonStyle}>Sign In</Button>
      </HStack>
    </Flex>
  );
};

export default Header;

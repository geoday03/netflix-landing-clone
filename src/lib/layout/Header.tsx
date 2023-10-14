import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';
import { DragHandleIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex as="header" width="full" align="center">
      <Box mr="auto" ml={4} color="red">
        <Heading>Netflix</Heading>
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

        <Button>Sign In</Button>
      </HStack>
    </Flex>
  );
};

export default Header;

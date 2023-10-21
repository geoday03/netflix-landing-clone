import { DragHandleIcon, ChevronDownIcon } from '@chakra-ui/icons';
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
  useStyleConfig,
} from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const netflixButtonStyle = useStyleConfig('Button', { variant: 'netflix' });

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="center"
      textAlign="center"
      p="1em"
    >
      <Box mr="auto" ml={4} color="red">
        <Heading fontSize="2rem">Netflix</Heading>
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

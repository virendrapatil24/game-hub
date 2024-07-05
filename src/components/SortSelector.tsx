import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order
      </MenuButton>
      <MenuList>
        <MenuItem>A</MenuItem>
        <MenuItem>B</MenuItem>
        <MenuItem>C</MenuItem>
        <MenuItem>D</MenuItem>
        <MenuItem>E</MenuItem>
        <MenuItem>F</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import React, { useState } from "react";
import { Container } from "../container";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  FlexibleContainer,
  Logo,
  LogoContainer,
  NavContainer,
  ButtonContainer,
  SearchContainer,
  Text,
  MenuContainer,
  FlexibleDivAccount,
  DropDownContainer,
} from "./styles";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../Button/button.component";
import LogoImage from "../../assets/logo.png";
import { SearchBar } from "../SearchBar/searchBar.component";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";

import { FaChevronDown } from "react-icons/fa";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavContainer>
      <MenuContainer>
        <HiMenuAlt2 size={36} onClick={toggleDropdown} />

        {isDropdownOpen && (
          <DropDownContainer>
            <p>yes</p>
            <p>yes</p>
            <p>yes</p>
          </DropDownContainer>
        )}
      </MenuContainer>
      <FlexibleContainer>
        <LogoContainer>
          <Logo src={LogoImage} alt="yes" />
        </LogoContainer>
        <SearchContainer>
          <SearchBar />
          <ButtonContainer>
            <Button>Search</Button>
          </ButtonContainer>
        </SearchContainer>
        <FlexibleDivAccount width="13%" background="" marginLeft="24px">
          <BsPerson size={24} />
          <Text>Account</Text>

          <FaChevronDown size={15} />
        </FlexibleDivAccount>
        <FlexibleDivAccount width="7%" background="" marginLeft="24px">
          <Text>Cart</Text>

          <IoCartOutline size={25} />
        </FlexibleDivAccount>
      </FlexibleContainer>
    </NavContainer>
  );
};

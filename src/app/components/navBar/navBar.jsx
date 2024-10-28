import React from "react";
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
  FlexibleDivAccount,
} from "./styles";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../Button/button.component";
import LogoImage from "../../assets/logo.png";
import { SearchBar } from "../SearchBar/searchBar.component";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

import { FaChevronDown } from "react-icons/fa";

export const NavBar = () => {
  return (
    <NavContainer>
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

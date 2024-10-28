import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Your Logo</Logo>
      <SearchBar>
        <SearchInput type="text" placeholder="Search" />
        <SearchButton>Search</SearchButton>
      </SearchBar>
      <NavLinks>
        <NavLink>
          <a href="#">Home</a>
        </NavLink>
        <NavLink>
          <a href="#">About</a>
        </NavLink>
        <NavLink>
          <a href="#">Contact</a>
        </NavLink>
        <Dropdown>
          <a href="#" className="dropdown-toggle">
            Account
          </a>
          <DropdownContent>
            <DropdownItem>
              <a href="#">Sign Up</a>
            </DropdownItem>
            <DropdownItem>
              <a href="#">Login</a>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </NavLinks>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #7a1111;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width:100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;   

  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;   

`;

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-right: none;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLink = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

const Dropdown = styled.li`
  position: relative;
`;

const DropdownContent = styled.ul`
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 10px;
`;

import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <IoIosSearch color="#000" size={24} />
      <Input
      placeholder="Search products, brands and categories"
      
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 40px;
  width: ${({ width }) => (width ? width : "83%")};
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  border: 1px solid #000;
  align-items: center;
`;


const Input = styled.input`
  background-color: transparent;
  height: 35px;
  border:0px;
  width: ${({ width }) => (width ? width : "100%")};
  color:#000;


  &:active {
    border:0px
  }

`;

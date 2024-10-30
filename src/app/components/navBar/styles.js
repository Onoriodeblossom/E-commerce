import styled from "styled-components";
import { Container } from "../container";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Image from "next/image";

export const NavContainer = styled(Container)`
  width: 100%;
  background-color: #fff;
`;
export const MenuContainer = styled.div`
  background: blue;
  display: none;

  position: relative;

  @media (max-width: 1030px) {
    display: block;
  }
`;

export const DropDownContainer = styled.div`
  background: blue;
  display: none;

  position: absolute;

  @media (max-width: 1030px) {
    display: block;
    position: fixed;
  }
`;

export const FlexibleContainer = styled.div`
  width: 95%;
  justify-content: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1030px) {
    display: none;
  }
`;

export const Logo = styled(Image)`
  height: 70px;
  width: 200px;
`;

export const LogoContainer = styled.div`
  width: auto;
`;

export const ButtonContainer = styled.div`
  width: 15%;
  height: 40px;
`;

export const SearchContainer = styled(FlexibleDiv)`
  display: flex;
  width: 54%;

  justify-content: space-between;
`;


export const FlexibleDivAccountDropDown = styled.div`
  width: ${({ width }) => (width ? width : "10%")};
`;
export const FlexibleDivAccount = styled.div`
  color: #000;
  display: flex;
  width: ${({ width }) => (width ? width : "10%")};

  justify-content: space-between;
align-items: center;
  &:hover,
  &:focus {
    & > * {
      color: orange;
      // Change the color of all direct children on hover
    }
  }
`;

export const DropDownContainerAccount = styled.div`
  background: black;
  /* display: ${({ isDropdownOpen }) => (isDropdownOpen ? "block" : "none")}; */

  position: absolute;

  /* @media (max-width: 1030px) {
    display: block;
    position: fixed;
  } */
`;

export const Text = styled.p`
  font-size: 18px;
  color: #000;
`;

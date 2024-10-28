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

  @media (max-width: 1010px) {
    display: block;
  }
`;

export const DropDownContainer = styled.div`
  background: blue;
  display: none;

  position: absolute;

  @media (max-width: 1010px) {
    display: block;
    position: fixed;
  }
`;

export const FlexibleContainer = styled(FlexibleDiv)`
  width: 95%;
  background-color: green;
  justify-content: flex-start;
  /* display: flex; */

  @media (max-width: 1010px) {
    flex-direction: column;
    align-items: flex-start;
    display: none;

    ${MenuContainer}:hover & {
      display: block;
    }
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
export const FlexibleDivAccount = styled(FlexibleDiv)`
  color: #000;

  &:focus {
    & > * {
      color: orange;

      // Change the color of all direct children on hover
    }
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: #000;
`;

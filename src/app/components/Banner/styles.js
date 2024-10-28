import { styled } from "styled-components";
import { Container } from "../container";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import bgImage from "../../assets/background.png";

import Image from "next/image";

export const BannerContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 2px 3px 8px 3px;
`;

export const Name = styled.p`
  background-color: ${({ background }) =>
    background ? background : "transparent"};
  font-size: 24px;
  color: blue;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const FlexibleContainer = styled(FlexibleDiv)`
  background-color: ${({ background }) =>
    background ? background : "transparent"};
  font-size: 24px;
  color: blue;
`;

export const ImageBackground = styled(Image)`
  height: 500px;
  width: 100%;
`;

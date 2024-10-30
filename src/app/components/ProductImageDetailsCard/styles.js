import { styled } from "styled-components";
import Image from "next/image";

export const ProductImageDetailsCardContainer = styled.div`
  height: 330px;
  width: 19%;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1030px) {
    width: 30%;
  }

  @media (max-width: 800px) {
    width: 47%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ImageDiv = styled(Image)`
  height: 70%;
  width: 100%;
`;
export const ProductName = styled.p`
  color: #000;
`;
export const ProductPrice = styled.p`
  color: #000;
`;

export const NumberOfProductLeft = styled.p`
  color: #000;
`;

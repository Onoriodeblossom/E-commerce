import { styled } from "styled-components";
import Image from "next/image";

export const ProductImageDetailsCardContainer = styled.div`
  height: 400px;
  width: 19%;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
`;

export const ImageDiv = styled(Image)`
  height: 70%;
  width: 100%;
`;
export const ProductName = styled.p`

color:#000;
`;
export const ProductPrice = styled.p`
  color: #000;
`;

export const NumberOfProductLeft = styled.p`
  color: #000;
`;

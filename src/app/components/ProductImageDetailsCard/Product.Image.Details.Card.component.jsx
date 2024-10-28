import React from "react";
import {
  ImageDiv,
  ProductImageDetailsCardContainer,
  ProductPrice,
  ProductName,
  NumberOfProductLeft,
} from "./styles";
import Image from "next/image";

import bgImage from "../../assets/background.png";


export const ProductImageDetailsCard = () => {
  return (
    <ProductImageDetailsCardContainer>
      <ImageDiv src={bgImage} />
      <ProductName>Iphone XR</ProductName>
      <ProductPrice>
        $1200
      </ProductPrice>
      <NumberOfProductLeft>
dkdjdjddjjd
      </NumberOfProductLeft>
    </ProductImageDetailsCardContainer>
  );
};

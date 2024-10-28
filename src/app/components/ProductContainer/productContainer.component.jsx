import React from "react";
import {
  ProductCardContainerWrapper,
  ProductCardWrapper,
  Title,
} from "./styles";
import { ProductImageDetailsCard } from "../ProductImageDetailsCard/Product.Image.Details.Card.component";
import { createUntrackedSearchParams } from "next/dist/client/components/search-params";

const cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export const ProductCardContainer = () => {
  return (
    <ProductCardContainerWrapper>
      <Title>All Product</Title>
      <ProductCardWrapper>
        {cards.map((card) => (
          <ProductImageDetailsCard />
        ))}
      </ProductCardWrapper>
    </ProductCardContainerWrapper>
  );
};

"use client";

import { Container } from "@/app/components/container";
// import { NavBar } from "@/app/components/navBar/navBar";
import React from "react";
import { BodyContainer, HomeContainer } from "./styles";
import { Banner } from "@/app/components/Banner/banner.component";
import { ProductCardContainer } from "@/app/components/ProductContainer/productContainer.component";

import { Footer } from "@/app/components/Footer/footer.component";
import { NavBar } from "@/app/components/navBar/navBar";


export const LandingPage = () => {
  return (
    <HomeContainer alignItems="flex-start" background="#ffffff">
      <NavBar/>



      <BodyContainer>
        <Banner />

        <ProductCardContainer />
      </BodyContainer>
      {/* jdjdcjcj */}

      <Footer />
    </HomeContainer>
  );
};

import React from "react";
import { BannerContainer, ImageBackground } from "./styles";

import bgImage from "../../assets/background.png";



export const Banner = () => {
  const imageUrl = "../../assets/background.png";
  return (
    <BannerContainer backgroundImage={imageUrl}>
      <ImageBackground src={bgImage} alt="yes" />
    </BannerContainer>
  );
};

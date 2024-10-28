import React from "react";
import { BtnText, ButtonStyles } from "./styles";

export const Button = ({
  background,
  border,
  borderRadius,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  onClick,
  loading,
  size,
  btnWidth,
  btnMinWidth,
  disabled,
  children,
}) => {
  return (
    <ButtonStyles
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick}
      size={size}
      disabled={disabled}
      btnWidth={btnWidth}
      btnMinWidth={btnMinWidth}
    >
      <BtnText
        btnColor={btnColor}
        textTransform={textTransform}
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {children}
      </BtnText>
    </ButtonStyles>
  );
};

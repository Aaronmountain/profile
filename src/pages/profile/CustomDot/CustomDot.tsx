import React from "react";
import { CustomArrowProps } from "react-slick";

const CustomDot = ({ className, style, onClick }: CustomArrowProps) => {
  return (
    <div
      className={`${className} dark`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default CustomDot;

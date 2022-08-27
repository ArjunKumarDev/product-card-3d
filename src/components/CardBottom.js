import React from "react";
import {
  Badge,
  CBottom,
  CBottomTitle,
  Colors,
  ColorTitle,
  Price,
  Size,
  Sizes,
  SizeTitle,
  Stars,
  Title,
} from "../Style";

const CardBottom = ({ currentColor, setCurrentColor }) => {
  return (
    <CBottom>
      <CBottomTitle>React 55</CBottomTitle>
      <Badge>New</Badge>
      <Title>Running Collections</Title>
      <Stars>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </Stars>
      <Size>
        <SizeTitle>Size</SizeTitle>
        <Sizes>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
        </Sizes>
      </Size>
      <div class="color">
        <ColorTitle>Color</ColorTitle>
        <Colors>
          <div class="color-1" onClick={() => setCurrentColor(1)}></div>
          <div class="color-2" onClick={() => setCurrentColor(2)}></div>
        </Colors>
      </div>
      <Price currentColor={currentColor}>
        <span>Usd</span>
        <span>350,00</span>
      </Price>
    </CBottom>
  );
};

export default CardBottom;

import React from "react";
import {
  Card,
  CTop,
  CTopText,
  CTopTitle,
  Logo,
  ShoeOne,
  Shoes,
  ShoeTwo,
} from "../Style";
import Brand from "../assets/nike.png";
import Shoe_1 from "../assets/shoe1.png";
import Shoe_2 from "../assets/shoe2.png";
import { useMotionValue, useTransform, motion } from "framer-motion";

const CardTop = ({ currentColor }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
  return (
    <>
      <CTop currentColor={currentColor}>
        {/* <Logo src={Brand} alt="logo" />
        <CTopText>
          <CTopTitle>Air Structure</CTopTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi
            ratione praesentium eum commodi modi neque dignissimos eligendi illo
            officiis!
          </p>
        </CTopText> */}

        <div>
          <Shoes
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            drag
            dragElastic={0.16}
            whileTap={{ cursor: "grabbing" }}
          >
            <ShoeOne src={Shoe_1} alt="shoe-1" />
            {/* <ShoeTwo src={Shoe_2} alt="shoe-2" /> */}
          </Shoes>
        </div>
      </CTop>
    </>
  );
};

export default CardTop;

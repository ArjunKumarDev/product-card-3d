import React, { useState } from "react";
import "./style.css";
import {
  Card,
  CardWrapper,
  Container,
  CTop,
  CTopText,
  CTopTitle,
  Description,
  Logo,
  ShoeOne,
  Shoes,
  ShoeTwo,
  Wrapper,
} from "./Style";
import CardTop from "./components/CardTop";
import CardBottom from "./components/CardBottom";
import Shoe_1 from "./assets/shoe1.png";
import Shoe_2 from "./assets/shoe2.png";
import Brand from "./assets/nike.png";

import { useMotionValue, useTransform } from "framer-motion";

function App() {
  const [currentColor, setCurrentColor] = useState(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  console.log("valuee", x);

  const variants = {
    default: {
      translateX: 0,
      rotateZ: 0,
    },
    firstShoeAnimation: {
      translateX: -700,
      rotateZ: 45,
    },
    secondShoeAnimation: {
      translateX: -400,
      rotateZ: -45,
    },
  };

  return (
    <Wrapper>
      <Container>
        <CardWrapper
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.16}
          whileTap={{ cursor: "grabbing" }}
        >
          <Card>
            <CTop currentColor={currentColor}>
              <Logo src={Brand} alt="logo" />
              <CTopText>
                <CTopTitle>React 55</CTopTitle>
                <Description>
                  The Nike React Element 55 SE is a balanced blend of classic
                  design and forword- looking innovation
                </Description>
              </CTopText>

              <Shoes
                style={{ x, y, rotateX, rotateY, z: 100000 }}
                drag
                dragElastic={0.16}
                whileTap={{ cursor: "grabbing" }}
              >
                <ShoeOne
                  currentColor={currentColor}
                  src={Shoe_1}
                  alt="shoe-1"
                  animate={
                    currentColor === 2
                      ? variants.firstShoeAnimation
                      : variants.default
                  }
                  variants={variants}
                />

                <ShoeTwo
                  currentColor={currentColor}
                  src={Shoe_2}
                  alt="shoe-2"
                  animate={
                    currentColor === 2
                      ? variants.secondShoeAnimation
                      : variants.default
                  }
                  variants={variants}
                />
              </Shoes>
            </CTop>
            <CardBottom
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
          </Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}

export default App;

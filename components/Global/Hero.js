import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import theme from "../Theme";
import Navigation from "./Navigation";
import { Spring, config } from "react-spring/renderprops.cjs";

import Link from "next/link";

const HeroContainer = styled.div``;

export default function Hero({ home }) {
  const [pos, setPos] = useState("top");
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);
  const logoProps = useSpring({
    config: config.slow,
    opacity: pos === "top" ? 0 : 1,
  });
  return (
    <HeroContainer>
      <Navigation />
    </HeroContainer>
  );
}

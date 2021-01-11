import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../Theme";
import Navigation from "./Navigation";

const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .hero-colour {
    height: 300px;
    width: 75%;
    background: ${theme.colours.yellow};
  }
`;

export default function Hero(props) {
  return (
    <HeroContainer>
      <div className="hero-text">
        <h1>Horlick Editorial</h1>
      </div>
      <div className="hero-colour">
        <Navigation />
      </div>
    </HeroContainer>
  );
}

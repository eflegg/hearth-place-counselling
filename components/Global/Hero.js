import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../Theme";
import Navigation from "./Navigation";
import { Spring, config } from "react-spring/renderprops.cjs";

const HeroContainer = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  justify-content: flex-end;
  .hero-text {
    /* border: 1px solid pink; */
    position: absolute;
    transform: translate(-30%, 50%);
    .hero-line {
      height: 3px;
      background: ${theme.colours.blue};
      margin-top: 25px;
      &.line-1 {
        width: 50%;
      }
      &.line-2 {
        width: 40%;
      }
      &.line-3 {
        width: 30%;
      }
    }
  }
  .hero-colour {
    position: relative;
    height: 300px;
    width: 75%;
    margin-top: 60px;
    .hero-colour-left {
      position: absolute;
      background: ${theme.colours.yellow};
      top: 0;
      left: 0;
      width: 50%;
      height: 300px;
    }
    .hero-colour-white {
      position: absolute;
      background: white;
      top: 0;
      right: 0;
      width: 50%;
      height: 300px;
    }
    .hero-colour-right {
      position: absolute;
      background: ${theme.colours.yellow};
      top: 0;
      right: 0;
      width: 50%;
      height: 300px;
    }
  }
`;

export default function Hero(props) {
  return (
    <HeroContainer>
      <Navigation />
      <div className="hero-colour">
        <Spring
          config={config.slow}
          from={{ opacity: 0, width: "0%" }}
          to={{ opacity: 1, width: "0%" }}
        >
          {(props) => <div className="hero-colour-left" style={props}></div>}
        </Spring>
        <Spring
          config={config.slow}
          from={{ opacity: 0, width: "0%" }}
          to={{ opacity: 1, width: "100%" }}
        >
          {(props) => <div className="hero-colour-right" style={props}></div>}
        </Spring>
        <Spring
          config={config.slow}
          from={{ width: "100%" }}
          to={{ width: "0%" }}
        >
          {(props) => <div className="hero-colour-white" style={props}></div>}
        </Spring>

        <div className="hero-text">
          <h1>{props.pageTitle}</h1>
          <Spring
            config={{ delay: 200 }}
            from={{ opacity: 0, width: "0%" }}
            to={{ opacity: 1, width: "50%" }}
          >
            {(props) => <div className="hero-line" style={props}></div>}
          </Spring>
          <Spring
            config={{ delay: 400 }}
            from={{ opacity: 0, width: "0%" }}
            to={{ opacity: 1, width: "40%" }}
          >
            {(props) => <div className="hero-line" style={props}></div>}
          </Spring>
          <Spring
            config={{ delay: 400 }}
            from={{ opacity: 0, width: "0%" }}
            to={{ opacity: 1, width: "30%" }}
          >
            {(props) => <div className="hero-line" style={props}></div>}
          </Spring>
        </div>
      </div>
    </HeroContainer>
  );
}

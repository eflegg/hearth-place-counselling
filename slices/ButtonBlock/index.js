import React from "react";
import styled from "styled-components";
import theme from "../../components/Theme";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

const ButtonBlockContainer = styled.div`
  background: ${theme.colours.stone};
  border-radius: 12px;
  width: 90%;
  margin: 40px auto;
  padding: 35px 5px;
  text-align: center;
  ${theme.mediaQuery.sm`
      width: 40%;
      padding: 56px;
      `}
  p {
    color: ${theme.colours.clay};
    text-align: center;
    font-size: 24px;
    line-height: 26px;
  }
  a {
    color: ${theme.colours.gold};
  }
  button {
    border-radius: 8px;
    padding: 5px 35px;
    font-size: 16px;
    font-family: ${theme.type.header};
    background: ${theme.colours.clay};
    color: ${theme.colours.gold};
    border: 0px;
    cursor: pointer;
    margin: 0 auto;
    transition: all 0.25s ease-in;
    &:hover {
      background: ${theme.colours.plum};
      transition: all 0.25s ease-in;
    }
  }
`;

const ButtonBlock = ({ slice }) => (
  <ButtonBlockContainer className="book-now--text">
    <p>{slice.primary.text}</p>
    {slice.primary.buttonLink && (
      <PrismicLink document={slice.primary.buttonLink}>
        <button>{slice.primary.buttonText}</button>
      </PrismicLink>
    )}
  </ButtonBlockContainer>
);

export default ButtonBlock;

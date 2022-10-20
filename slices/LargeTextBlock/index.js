import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";

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
    font-size: 32px;
    line-height: 36px;
    // font-weight: 100;
  }
`;

const LargeTextBlock = ({ slice }) => (
  <ButtonBlockContainer className="book-now--text">
    <p>{slice.primary.text}</p>
  </ButtonBlockContainer>
);

export default LargeTextBlock;

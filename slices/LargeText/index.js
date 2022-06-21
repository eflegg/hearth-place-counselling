import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";

const LargeTextContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  text-align: center;
`;

const LargeText = ({ slice }) => (
  <LargeTextContainer className="book-now--text">
    <PrismicRichText field={slice.primary.title} />
  </LargeTextContainer>
);

export default LargeText;

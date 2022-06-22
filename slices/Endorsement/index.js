import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";

const EndorsementContainer = styled.div`
  width: 90%;
  margin: 40px auto;

  text-align: center;
  ${theme.mediaQuery.sm`
    
      padding: 56px;
      display: flex;
      justify-content: center;
      `}
  p {
    color: ${theme.colours.clay};
    text-align: left;
    font-size: 18px;
    line-height: 22px;
    font-weight: 100;
    font-family: ${theme.type.header};
  }
`;
const EndorsementSingle = styled.div`
  &:nth-child(odd) {
    background: ${theme.colours.river};
  }
  &:nth-child(even) {
    background: ${theme.colours.gold};
  }
  /* width: 90%; */
  margin: 0 auto;
  ${theme.mediaQuery.md`
  width: 40%;
  `}
  border-radius: 12px;
  margin: 2px;
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Endorsement = ({ slice }) => (
  <EndorsementContainer>
    {slice?.items?.map((item, i) => (
      <EndorsementSingle key={i}>
        <p>{item.endorsementText}</p>
        <p>~ {item.attribution}</p>
      </EndorsementSingle>
    ))}
  </EndorsementContainer>
);

export default Endorsement;

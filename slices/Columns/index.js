import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";

const ColumnsContainer = styled.div`
  h3 {
    color: ${theme.colours.gold};
  }
  .columns--inner {
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    border: 2px solid magenta;
  }
`;
const Column = styled.div`
  width: 100%;
  ${theme.mediaQuery.md`

min-width: 25%;
max-width: 45%;
`}
`;

const Columns = ({ slice }) => (
  <ColumnsContainer>
    {slice.primary.title ? (
      <PrismicRichText field={slice.primary.title} />
    ) : null}

    <div className="columns--inner">
      {slice?.items?.map((item, i) => (
        <Column key={i}>
          {item.subtitle && <p className="paragraph--bold">{item.subtitle}</p>}
          {item.columnText && <PrismicRichText field={item.columnText} />}
        </Column>
      ))}
    </div>
  </ColumnsContainer>
);

export default Columns;

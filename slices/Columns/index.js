import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import styled from "styled-components";
import theme from "../../components/Theme";

const ColumnsContainer = styled.div`
  margin-bottom: 50px;
  h3 {
    color: ${theme.colours.gold};
    text-align: center;
    margin: 20px 0;
  }
  .columns--inner {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }
`;
const Column = styled.div`
  width: 100%;
  ${theme.mediaQuery.sm`
  padding: 0px 10px;
  width: 45%;
`}
  ${theme.mediaQuery.md`
  width: 27%;
`}
 ${theme.mediaQuery.lg`
  width: 22%;
`}
.paragraph--bold {
    ${theme.mediaQuery.sm`
 height: 55px;
//  border: 2px solid magenta;
 margin-bottom: 0px;
`}
  }
  .paragraph-container {
    /* border: 2px solid slateblue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      font-weight: bold;
      &:hover {
        color: ${theme.colours.gold};
      }
    }
  }
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
          <div className="paragraph-container">
            {item.columnText && <PrismicRichText field={item.columnText} />}
          </div>
        </Column>
      ))}
    </div>
  </ColumnsContainer>
);

export default Columns;

import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import styled from "styled-components";
import theme from "./Theme";
import { Waypoint } from "react-waypoint";
import Dots from "./Shapes/dots";
import Link from "next/link";

const HomeHireContainer = styled.section`
  .img-1 {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    overflow: visible;
    img {
      width: 100vw;
      height: 500px;
      object-fit: cover;
      overflow: visible;
    }
  }
  h2 {
    text-align: right;
    margin-bottom: 25px;
  }
`;
const ReasonContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${theme.mediaQuery.sm`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 110px;
  `}
  ${theme.mediaQuery.md`
  flex-direction: row;
  margin-bottom: 110px;
  flex-wrap: nowrap;
  `}

  overflow: visible;
`;

const Reason = styled.div`
  padding: 50px;
  position: relative;
  max-width: 180px;
  ${theme.mediaQuery.xs`
   max-width: 250px;
  `}
  ${theme.mediaQuery.sm`
   max-width: 180px;
  `}
  ${theme.mediaQuery.md`
   max-width: 250px;
  `}
  transition: all 0.25s ease-in-out;
  &:nth-child(odd) {
    border: 3px solid ${theme.colours.blue};
  }
  &:nth-child(even) {
    border: 3px solid ${theme.colours.yellow};
  }
  &.reason-left {
    transition: all 0.75s ease-in-out;
    ${theme.mediaQuery.sm`
    transition: all .75s ease-in-out;
    left: 0px;
      `}
    ${theme.mediaQuery.md`
    transition: all .75s ease-in-out;
    left: 35px;
      `}
  }
  &.reason-center {
    top: -40px;
    left: 37px;
    transition: all 0.75s ease-in-out;
    ${theme.mediaQuery.sm`
    transition: all .75s ease-in-out;
    left: 50px;
  
      `}
    ${theme.mediaQuery.sm`
    transition: all .75s ease-in-out;
    left: -25px;
    top: 25px;
      `}
    ${theme.mediaQuery.md`
    transition: all .75s ease-in-out;
      top: 50px;
       left: 0;
      `}
  }
  &.reason-right {
    transition: all 0.75s ease-in-out;
    top: -80px;
    left: 30px;
    ${theme.mediaQuery.sm`
    transition: all .75s ease-in-out;
    left: 45px;
    top: -25px;
      `}
    ${theme.mediaQuery.md`
    transition: all .75s ease-in-out;
    left: -35px;
    top: 100px;
      `}
  }
`;

export default function HomeHire() {
  return (
    <HomeHireContainer>
      <Dots />
      <h2>Why Hire an Indexer?</h2>
      <ReasonContainer>
        <Spring
          config={{ delay: 2000 }}
          from={{ opacity: 0, top: "15px" }}
          to={{ opacity: 1, top: "0px" }}
        >
          {(props) => (
            <Reason style={props} className="reason-container reason-left">
              <p>
                My professional training and academic background ensures that
                you'll receive an index your readers can rely on.
              </p>
            </Reason>
          )}
        </Spring>
        <Reason className="reason-container reason-center">
          <p>
            I use specialized indexing software that keeps me fast and accurate,
            making it possible for you to meet your publisher's deadlines.
          </p>
        </Reason>
        <Reason className="reason-container reason-right">
          <p>
            Hiring a professional ensures that your readers get the best
            possible guide to your text, and that you get more time to celebrate
            your book.
          </p>
        </Reason>
      </ReasonContainer>

      <button className="btn">
        <Link href="/services">
          <a>See My Services</a>
        </Link>
      </button>
    </HomeHireContainer>
  );
}

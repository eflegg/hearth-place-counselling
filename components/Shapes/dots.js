import { Spring, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import styled from "styled-components";
import theme from "../Theme";
import { Waypoint } from "react-waypoint";

const DotContainer = styled.div`
  border: 1px solid hotpink;
  width: 100%;
  .single-dot {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: ${theme.colours.blue};
    margin-bottom: 8px;
  }
`;

export default function Dots(props) {
  const [dotsVisible, setDotsVisible] = useState(false);

  return (
    <Waypoint
      onEnter={() => {
        setDotsVisible(true);
        console.log("dots visible");
      }}
      onLeave={() => {
        setDotsVisible(false);
        console.log("dots NOT visible");
      }}
    >
      <DotContainer className={`${props.className ? props.className : ""}`}>
        <Spring
          config={{ delay: 400 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {(props) => <div style={props} className="single-dot"></div>}
        </Spring>
        <Spring
          config={{ delay: 550 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {(props) => <div style={props} className="single-dot"></div>}
        </Spring>
        <Spring
          config={{ delay: 700 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {(props) => <div style={props} className="single-dot"></div>}
        </Spring>
        <Spring
          config={{ delay: 850 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {(props) => <div style={props} className="single-dot"></div>}
        </Spring>
      </DotContainer>
    </Waypoint>
  );
}

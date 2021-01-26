import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import styled from "styled-components";
import theme from "../Theme";
import { Waypoint } from "react-waypoint";

const DotContainer = styled.div`
  /* border: 1px solid hotpink; */

  .single-dot {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: ${theme.colours.blue};
    margin-bottom: 8px;
    &.right {
      margin-left: auto;
    }
    &.left {
      margin-right: auto;
    }
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
        <Transition
          config={{ delay: 400 }}
          items={dotsVisible}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(dotsVisible) =>
            dotsVisible &&
            ((props) => <div className="single-dot" style={props}></div>)
          }
        </Transition>
        <Transition
          config={{ delay: 550 }}
          items={dotsVisible}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(dotsVisible) =>
            dotsVisible &&
            ((props) => <div className="single-dot" style={props}></div>)
          }
        </Transition>
        <Transition
          config={{ delay: 700 }}
          items={dotsVisible}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(dotsVisible) =>
            dotsVisible &&
            ((props) => <div className="single-dot" style={props}></div>)
          }
        </Transition>
        <Transition
          config={{ delay: 850 }}
          items={dotsVisible}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(dotsVisible) =>
            dotsVisible &&
            ((props) => <div className="single-dot" style={props}></div>)
          }
        </Transition>
      </DotContainer>
    </Waypoint>
  );
}

import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";

import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";

const ServiceContainer = styled.div`
  .services-1__title {
    width: 100%;
    margin: 100px 0;
    display: flex;
    justify-content: space-between;
    h2 {
      width: 100%;
      text-align: right;
    }
    .horiz-line {
      border-bottom: 3px solid ${theme.colours.yellow};
      width: 60%;
      transform: translateX(-20%);
    }
  }
`;

export default function SingleService(props) {
  return (
    <ServiceContainer className="services-1">
      <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
        <div className="services-1__title">
          <Transition
            config={config.slow}
            items={props.items}
            from={{ width: "0%" }}
            enter={{ width: "100%" }}
            leave={{ width: "0%" }}
          >
            {(indexLine) =>
              indexLine &&
              ((props) => <div className="horiz-line" style={props}></div>)
            }
          </Transition>

          <h2>{props.serviceTitle}</h2>
        </div>
      </Waypoint>
    </ServiceContainer>
  );
}

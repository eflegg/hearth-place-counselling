import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import styled from "styled-components";
import theme from "../components/Theme";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

export default function SingleService(props) {
  const [indexLine, setIndexLine] = useState(false);
  const ServiceContainer = styled.div`
    &:nth-child(even) {
      .horiz-line {
        border-bottom: 3px solid ${theme.colours.yellow};
        width: 60%;
        transform: translateX(40%);
      }
      .services-1__title {
        flex-direction: row-reverse;
        h2 {
          text-align: left;
          margin-right: auto;
        }
      }
    }

    &:nth-child(odd) {
      .horiz-line {
        border-bottom: 3px solid ${theme.colours.yellow};
        width: 60%;
        transform: translateX(-40%);
      }
      .services-1__title {
        flex-direction: row;
        h2 {
          text-align: right;
          margin-left: auto;
        }
      }
    }
    .services-1__title {
      width: 100%;
      margin: 100px 0;
      display: flex;

      justify-content: space-between;
      align-items: center;
      h2 {
        width: 40%;
      }
    }
  `;
  return (
    <ServiceContainer className="services-1">
      <Waypoint
        onEnter={() => {
          setIndexLine(true);
          console.log("index line visible");
        }}
        onLeave={() => {
          setIndexLine(false);
          console.log("index line NOT visible");
        }}
      >
        <div className="services-1__title">
          <Transition
            config={config.slow}
            items={indexLine}
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
      <p>{props.servicesText}</p>
    </ServiceContainer>
  );
}

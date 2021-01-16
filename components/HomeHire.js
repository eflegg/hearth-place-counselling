import { Spring, Transition, config } from "react-spring/renderprops.cjs";
import { useState } from "react";
import styled from "styled-components";
import theme from "./Theme";
import { Waypoint } from "react-waypoint";

const HomeHireContainer = styled.section`
  h2 {
    text-align: right;
    margin-bottom: 25px;
  }
`;
const ReasonContainer = styled.section`
  display: flex;
  margin-bottom: 50px;
`;

const Reason = styled.div`
  padding: 50px;
  width: 300px;
  position: relative;
  &:nth-child(odd) {
    border: 3px solid ${theme.colours.blue};
  }
  &:nth-child(even) {
    border: 3px solid ${theme.colours.yellow};
  }
  &.reason-left {
    left: 35px;
  }
  &.reason-center {
    top: 35px;
  }
  &.reason-right {
    left: -35px;
    top: 70px;
  }
`;

export default function HomeHire() {
  return (
    <HomeHireContainer>
      <h2>Why Hire an Indexer?</h2>
      <ReasonContainer>
        <Reason className="reason-container reason-left">
          <p>
            The first reason you should hire a professional. Because you should
            always hire a professional.
          </p>
        </Reason>
        <Reason className="reason-container reason-center">
          <p>
            The first reason you should hire a professional. Because you should
            always hire a professional.
          </p>
        </Reason>
        <Reason className="reason-container reason-right">
          <p>
            The first reason you should hire a professional. Because you should
            always hire a professional.
          </p>
        </Reason>
      </ReasonContainer>
      <button className="btn">My Services</button>
    </HomeHireContainer>
  );
}

import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";

const ButtonContainer = styled.button`
  background: ${theme.colours.clay};
  color: ${(props) => props.colour};
  border-radius: 8px;
  padding: 5px 35px;
  font-size: ${(props) => (props.large ? "16px" : "14px")};
  font-family: ${theme.type.header};
  border: 0px;
  cursor: pointer;
`;

export default function Button({ value, colour, link, large, className }) {
  return (
    <Link href={`/${link}`}>
      <a className={`${className ? className : ""}`}>
        <ButtonContainer large={large} colour={colour}>
          {value}
        </ButtonContainer>
      </a>
    </Link>
  );
}

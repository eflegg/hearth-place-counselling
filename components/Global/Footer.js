import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";

const FooterContainer = styled.footer`
  border-top: 1px solid ${theme.colours.blue};
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
  h3 {
    color: ${theme.colours.black};
    text-align: center;
  }
`;

export default function Footer() {
  const year = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
  return (
    <FooterContainer>
      <h3>Copyright Leah Horlick</h3>
      <h3>{year}</h3>
    </FooterContainer>
  );
}

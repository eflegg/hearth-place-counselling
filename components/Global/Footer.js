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
    font-size: 20px;
  }
  .isc-logo {
    width: 90%;
    max-width: 300px;
    margin: 25px auto;
    text-align: center;
    img {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  const year = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
  return (
    <FooterContainer>
      <div className="isc-logo">
        <img src="/ISC-logo.png" alt="" />
      </div>
      <h3>Copyright Leah Horlick</h3>
      <h3>{year}</h3>
    </FooterContainer>
  );
}

import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";

const FooterContainer = styled.footer`
  border-top: 1px solid ${theme.colours.blue};
  width: 80%;
  margin: 100px auto 50px;
  padding-top: 30px;
  h3 {
    color: ${theme.colours.black};
    text-align: center;
    font-size: 16px;
  }
  .footer-logos {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .isc-logo {
    margin: 25px auto;
    text-align: center;
    img {
      width: 300px;
      max-width: 100%;
    }
  }
  .wu-logo {
    margin: 25px auto;
    text-align: center;
    img {
      width: 150px;
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
      <div className="footer-logos">
        <div className="isc-logo">
          <img src="/ISC-logo.png" alt="" />
        </div>
        <div className="wu-logo">
          <img src="/writers-union.png" alt="" />
        </div>
      </div>
      <h3>Copyright Leah Horlick</h3>
      <h3>{year}</h3>
    </FooterContainer>
  );
}
